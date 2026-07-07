#include <iostream>
#include <vector>
#include <set>
#include <map>
#include <algorithm>
#include <numeric>
#include <cmath>
#include <queue>
#include <cstdint>
#include <tuple>

#if defined(_MSC_VER)
#include <intrin.h>
#endif


int find_first_set_bit(uint64_t n) {
    if (n == 0) return -1;
#if defined(_MSC_VER)
    unsigned long index;
    _BitScanForward64(&index, n);
    return index;
#else
    return __builtin_ctzll(n); 
#endif
}

int count_set_bits(uint64_t n) {
    int count = 0;
    while (n > 0) {
        n &= (n - 1);
        count++;
    }
    return count;
}

using Point = std::pair<int, int>;

std::map<std::pair<uint64_t, std::vector<Point>>, std::vector<std::set<Point>>> memo;

bool is_connected(uint64_t mask, int start_idx, const std::vector<std::vector<int>>& adj_idx) {
    if (mask == 0) return true;
    
    std::queue<int> q;
    q.push(start_idx);
    std::set<int> visited;
    visited.insert(start_idx);

    while (!q.empty()) {
        int u = q.front();
        q.pop();
        for (int v : adj_idx[u]) {
            if (((mask >> v) & 1) && visited.find(v) == visited.end()) {
                visited.insert(v);
                q.push(v);
            }
        }
    }
    return visited.size() == count_set_bits(mask);
}

std::set<Point> get_unit_squares(int n, const std::vector<std::tuple<int, int, int, int>>& lines) {
    std::map<int, std::set<int>> h_edges, v_edges;
    std::set<Point> all_points;

    for (int i = 0; i < n; ++i) {
        int x1 = std::get<0>(lines[i]); int y1 = std::get<1>(lines[i]);
        int x2 = std::get<2>(lines[i]); int y2 = std::get<3>(lines[i]);
        all_points.insert({x1, y1}); all_points.insert({x2, y2});
        if (x1 == x2) {
            for (int y = std::min(y1, y2); y < std::max(y1, y2); ++y) v_edges[x1].insert(y);
        } else {
            for (int x = std::min(x1, x2); x < std::max(x1, x2); ++x) h_edges[y1].insert(x);
        }
    }

    if (all_points.empty()) return {};

    Point start_node = *all_points.begin();
    while (h_edges.count(start_node.second) && h_edges[start_node.second].count(start_node.first) &&
           h_edges.count(start_node.second + 1) && h_edges[start_node.second + 1].count(start_node.first)) {
        start_node.second++;
    }

    std::set<Point> squares;
    std::queue<Point> q;
    squares.insert(start_node); q.push(start_node);

    while (!q.empty()) {
        Point p = q.front(); q.pop();
        int x = p.first; int y = p.second;
        Point neighbors[] = {{x, y + 1}, {x, y - 1}, {x + 1, y}, {x - 1, y}};
        bool borders[] = {
            h_edges.count(y + 1) && h_edges[y + 1].count(x),
            h_edges.count(y) && h_edges[y].count(x),
            v_edges.count(x + 1) && v_edges[x + 1].count(y),
            v_edges.count(x) && v_edges[x].count(y)
        };
        for (int i = 0; i < 4; ++i) {
            if (!borders[i] && squares.find(neighbors[i]) == squares.end()) {
                squares.insert(neighbors[i]); q.push(neighbors[i]);
            }
        }
    }
    return squares;
}

std::vector<std::tuple<int, int, int>> get_candidate_dims(int area) {
    if (area % 2 != 0) return {};
    std::set<std::tuple<int, int, int>> candidates;
    int a_half = area / 2;
    for (int l = 1; l * l <= a_half; ++l) {
        for (int w = l; l * w <= a_half; ++w) {
            int num = a_half - l * w; int den = l + w;
            if (den > 0 && num % den == 0) {
                int h = num / den;
                if (h >= w) {
                    std::vector<int> dims = {l, w, h};
                    std::sort(dims.begin(), dims.end());
                    candidates.insert({dims[0], dims[1], dims[2]});
                }
            }
        }
    }
    return std::vector<std::tuple<int, int, int>>(candidates.begin(), candidates.end());
}

std::vector<std::set<Point>> can_tile(uint64_t uncovered_mask,
                                      const std::vector<Point>& faces_to_find,
                                      const std::vector<Point>& square_coords,
                                      const std::map<Point, int>& coord_to_idx,
                                      const std::vector<std::vector<int>>& adj_idx) {
    if (uncovered_mask == 0) {
        return faces_to_find.empty() ? std::vector<std::set<Point>>() : std::vector<std::set<Point>>{{{{-1, -1}}}};
    }
    if (faces_to_find.empty()) {
        return {{{{-1, -1}}}};
    }
    std::pair<uint64_t, std::vector<Point>> state = {uncovered_mask, faces_to_find};
    if (memo.count(state)) return memo[state];
    int first_bit_idx = find_first_set_bit(uncovered_mask);
    Point anchor = square_coords[first_bit_idx];
    Point face_dim = faces_to_find[0];
    std::vector<Point> remaining_faces(faces_to_find.begin() + 1, faces_to_find.end());
    std::set<Point> orientations;
    orientations.insert(face_dim);
    orientations.insert({face_dim.second, face_dim.first});

    for (auto& p : orientations) {
        int w = p.first; int h = p.second;
        uint64_t current_mask = 0;
        bool possible = true;
        std::set<Point> current_face_squares;
        for (int i = 0; i < w; ++i) {
            for (int j = 0; j < h; ++j) {
                Point sq = {anchor.first + i, anchor.second + j};
                if (coord_to_idx.find(sq) == coord_to_idx.end()) { possible = false; break; }
                int idx = coord_to_idx.at(sq);
                if (!((uncovered_mask >> idx) & 1)) { possible = false; break; }
                current_mask |= (1ULL << idx);
                current_face_squares.insert(sq);
            }
            if (!possible) break;
        }
        if (possible) {
            uint64_t new_mask = uncovered_mask ^ current_mask;
            if (new_mask == 0 || is_connected(new_mask, find_first_set_bit(new_mask), adj_idx)) {
                auto sub_solution = can_tile(new_mask, remaining_faces, square_coords, coord_to_idx, adj_idx);
                if (sub_solution.empty() || sub_solution[0].begin()->first != -1) {
                    sub_solution.push_back(current_face_squares);
                    return memo[state] = sub_solution;
                }
            }
        }
    }
    return memo[state] = {{{{-1, -1}}}};
}

bool check_topology(const std::vector<std::set<Point>>& placed_faces) {
    std::vector<std::vector<int>> adj(6);
    int edge_count = 0;
    for (size_t i = 0; i < 6; ++i) {
        for (size_t j = i + 1; j < 6; ++j) {
            bool is_adjacent = false;
            for (const auto& p1 : placed_faces[i]) {
                Point neighbors[] = {{p1.first+1, p1.second}, {p1.first-1, p1.second}, {p1.first, p1.second+1}, {p1.first, p1.second-1}};
                for(const auto& p_n : neighbors){
                    if(placed_faces[j].count(p_n)){ is_adjacent = true; break; }
                }
                if(is_adjacent) break;
            }
            if (is_adjacent) { adj[i].push_back(j); adj[j].push_back(i); edge_count++; }
        }
    }
    if (edge_count != 5) return false;

    std::queue<int> q; q.push(0);
    std::set<int> visited; visited.insert(0);
    while(!q.empty()){
        int u = q.front(); q.pop();
        for(int v : adj[u]){
            if(visited.find(v) == visited.end()){ visited.insert(v); q.push(v); }
        }
    }
    if (visited.size() != 6) return false;

    auto bfs = [&](int start_node) {
        std::queue<std::pair<int, int>> q_bfs;
        q_bfs.push({start_node, 0});
        std::map<int, int> dist;
        dist[start_node] = 0;
        int farthest_node = start_node;
        while(!q_bfs.empty()){
            auto p = q_bfs.front(); q_bfs.pop();
            int u = p.first; int d = p.second;
            if(d > dist[farthest_node]) farthest_node = u;
            for(int v : adj[u]){
                if(dist.find(v) == dist.end()){ dist[v] = d + 1; q_bfs.push({v, d + 1}); }
            }
        }
        return std::make_pair(farthest_node, dist[farthest_node]);
    };

    auto p1 = bfs(0); int farthest_u = p1.first;
    auto p2 = bfs(farthest_u); int diameter = p2.second;
    return diameter <= 4;
}

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n;
    std::cin >> n;
    std::vector<std::tuple<int, int, int, int>> lines(n);
    for (int i = 0; i < n; ++i) {
        std::cin >> std::get<0>(lines[i]) >> std::get<1>(lines[i]) >> std::get<2>(lines[i]) >> std::get<3>(lines[i]);
    }

    auto unit_squares = get_unit_squares(n, lines);
    if (unit_squares.empty() || unit_squares.size() > 64) {
        std::cout << 0 << std::endl; return 0;
    }

    for (const auto& p : unit_squares) {
        if (unit_squares.count({p.first + 1, p.second}) &&
            unit_squares.count({p.first, p.second + 1}) &&
            unit_squares.count({p.first + 1, p.second + 1})) {
            std::cout << 0 << std::endl; return 0;
        }
    }
    
    int area = unit_squares.size();
    auto candidates = get_candidate_dims(area);
    std::vector<Point> square_coords(unit_squares.begin(), unit_squares.end());
    std::map<Point, int> coord_to_idx;
    for(size_t i=0; i<square_coords.size(); ++i) coord_to_idx[square_coords[i]] = i;
    
    std::vector<std::vector<int>> adj_idx(area);
    for(size_t i=0; i<area; ++i){
        Point p = square_coords[i];
        Point neighbors[] = {{p.first+1, p.second}, {p.first-1, p.second}, {p.first, p.second+1}, {p.first, p.second-1}};
        for(const auto& neighbor : neighbors){
            if(coord_to_idx.count(neighbor)){ adj_idx[i].push_back(coord_to_idx[neighbor]); }
        }
    }

    for (const auto& cand : candidates) {
        int l = std::get<0>(cand); int w = std::get<1>(cand); int h = std::get<2>(cand);
        std::vector<Point> faces_to_find = {{l, w}, {l, w}, {l, h}, {l, h}, {w, h}, {w, h}};
        std::sort(faces_to_find.begin(), faces_to_find.end());
        memo.clear();
        uint64_t initial_mask = (1ULL << area) - 1;
        auto tiling = can_tile(initial_mask, faces_to_find, square_coords, coord_to_idx, adj_idx);
        if (!tiling.empty() && tiling[0].begin()->first != -1) {
            if (check_topology(tiling)) {
                std::cout << (long long)l * w * h << std::endl;
                return 0;
            }
        }
    }

    std::cout << 0 << std::endl;
    return 0;
}