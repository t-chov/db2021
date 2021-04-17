import csv
import sys

if __name__ == '__main__':
    with open(sys.argv[1]) as input_tsv:
        reader = csv.DictReader(input_tsv, delimiter="\t")
        for items in reader:
            legend = items['name']
            pearls = items['pearls']
            unions = items['unions']
            baystars = items['baystars']
            print('{'+f" name: '{legend}', pearls: {pearls}, baystars: {baystars}, unions: {unions}"+' },')
