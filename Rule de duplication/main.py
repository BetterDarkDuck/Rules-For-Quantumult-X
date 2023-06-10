def get_rules_from_file(filename):
    with open(filename, 'r',encoding='utf-8') as file:
        return set(line.strip().lower() for line in file if not line.strip().startswith(("#", ";", "//")))

def merge_rules(file1, file2):
    # Get rules from files
    rules1 = get_rules_from_file(file1)
    rules2 = get_rules_from_file(file2)

    # Merge rules
    merged_rules = rules1.union(rules2)
    intersection_rules = rules1.intersection(rules2)
    return merged_rules,intersection_rules

def write_rules_to_file(filename, rules):
    with open(filename, 'w',encoding='utf-8') as file:
        for rule in rules:
            file.write(f"{rule}\n".encode('utf-8').decode('utf-8'))

def main():
    
    file1 = r'Rule de duplication\1.list'  # Replace with your first file name
    file2 = r'Rule de duplication\2.list'  # Replace with your second file name
    merged_rules,intersection_rules = merge_rules(file1, file2)

    output_file1 = r'Rule de duplication\result.list'  # Output file
    output_file2 = r'Rule de duplication\intersection_rules.list'  # Output file

    write_rules_to_file(output_file1, merged_rules)
    write_rules_to_file(output_file2, intersection_rules)


if __name__ == "__main__":
    main()
