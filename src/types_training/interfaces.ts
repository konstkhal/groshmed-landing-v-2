interface Reportable {
  // interface is a custom type
  modelName: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  modelName: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.modelName}`;
  },
};

const drinkOne = {
  // object
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
