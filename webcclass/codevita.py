import sys
data = sys.stdin.read().split()
R, C = int(data[0]), int(data[1])
folds = data[2].split()
layers = [[[(i*C + j + 1)] for j in range(C)] for i in range(R)]
for fold in folds:
    if fold[0] == 'v':
        k = int(fold[1:]) - 1
        if 0 <= k < C-1:
            left = k + 1
            size = min(left, C-left)
            new_C = max(left, C-left)
            new_layers = [[[] for _ in range(new_C)] for _ in range(R)]
            for i in range(R):
                for j in range(left): new_layers[i][j].extend(layers[i][j])
                for j in range(size):
                    src = C - 1 - j
                    dst = left - 1 - j
                    if dst >= 0:
                        for c in reversed(layers[i][src]): new_layers[i][dst].append(c)
            C, layers = new_C, new_layers
    else:
        k = int(fold[1:]) - 1
        if 0 <= k < R-1:
            top = k + 1
            size = min(top, R-top)
            new_R = max(top, R-top)
            new_layers = [[[] for _ in range(C)] for _ in range(new_R)]
            for i in range(top):
                for j in range(C): new_layers[i][j].extend(layers[i][j])
            for i in range(size):
                src = R - 1 - i
                dst = top - 1 - i
                if dst >= 0:
                    for j in range(C):
                        for c in reversed(layers[src][j]): new_layers[dst][j].append(c)
            R, layers = new_R, new_layers
top_cell = bot_cell = float('inf')
for i in range(R):
    for j in range(C):
        if layers[i][j]:
            top_cell = min(top_cell, layers[i][j][-1])
            bot_cell = min(bot_cell, layers[i][j][0])
print(top_cell, bot_cell)