import java.util.*;
import java.io.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        
        String[] dimensions = reader.readLine().trim().split(" ");
        int R = Integer.parseInt(dimensions[0]);
        int C = Integer.parseInt(dimensions[1]);
        int initialC = C;

        ArrayList<ArrayList<LinkedList<Integer>>> grid = new ArrayList<>();
        for (int r = 0; r < R; r++) {
            ArrayList<LinkedList<Integer>> row = new ArrayList<>();
            for (int c = 0; c < C; c++) {
                LinkedList<Integer> cell = new LinkedList<>();
                cell.add((r * initialC) + c + 1);
                row.add(cell);
            }
            grid.add(row);
        }

        String[] instructions = reader.readLine().trim().split(" ");

        for (String instruction : instructions) {
            char foldType = instruction.charAt(0);
            int k = Integer.parseInt(instruction.substring(1));

            if (foldType == 'h') {
                if (k >= R) continue;

                for (int i = 0; i < R - k; i++) {
                    int r_fold_idx = k + i;
                    int r_base_idx = k - 1 - i;

                    if (r_base_idx < 0) {
                        r_base_idx = 0;
                    }
                    
                    for (int c = 0; c < C; c++) {
                        LinkedList<Integer> stackToFold = grid.get(r_fold_idx).get(c);
                        Collections.reverse(stackToFold);
                        grid.get(r_base_idx).get(c).addAll(0, stackToFold);
                    }
                }
                
                R = k;
                while (grid.size() > k) {
                    grid.remove(grid.size() - 1);
                }

            } else if (foldType == 'v') {
                if (k >= C) continue;

                int baseColsCount = C - k;
                
                for (int i = 0; i < k; i++) {
                    int c_fold_idx = baseColsCount + i;
                    int c_base_idx = baseColsCount - 1 - i;


                     if (c_base_idx < 0) {
                        c_base_idx = 0;
                    }

                    for (int r = 0; r < R; r++) {
                        LinkedList<Integer> stackToFold = grid.get(r).get(c_fold_idx);
                        Collections.reverse(stackToFold);
                        grid.get(r).get(c_base_idx).addAll(0, stackToFold);
                    }
                }
                
                C = baseColsCount;
                for (int r = 0; r < R; r++) {
                    while (grid.get(r).size() > C) {
                        grid.get(r).remove(grid.get(r).size() - 1);
                    }
                }
            }
        }

        System.out.println(grid.get(0).get(0).getFirst() + " " + grid.get(0).get(0).getLast());
    }
}