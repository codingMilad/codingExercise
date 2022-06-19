def merge_arrays(a, b):
    newArray = a+b
    newArray.sort()
    unique = []

    for i in newArray:
        if i not in unique:
            unique.append(i)

    return unique




print(merge_arrays([1,3,5,7,9], [10,8,6,4,2]))