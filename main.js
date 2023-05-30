const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let positiveSum = 0;
let positiveCount = 0;

let maxElement = null;
let maxElementIndex = null;

let negativeCount = 0;

let oddPositiveSum = 0;
let oddPositiveCount = 0;
let evenPositiveSum = 0;
let evenPositiveCount = 0;

let positiveNumbersMult = 1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveSum += numbers[i];
    positiveCount += 1;

    positiveNumbersMult *= numbers[i];

    if (numbers[i] % 2) {
      oddPositiveSum += numbers[i];
      oddPositiveCount += 1;
    } else {
      evenPositiveSum += numbers[i];
      evenPositiveCount += 1;
    }
  }

  if (numbers[i] > maxElement) {
    maxElement = numbers[i];
    maxElementIndex = i;
  }

  if (numbers[i] < 0) {
    negativeCount += 1;
  }
}

alert(`1. Знайти суму та кількість позитивних елементів:
сума - ${positiveSum}, кількість - ${positiveCount}.

2. Знайти максимальний елемент масиву та його порядковий номер:
максимальний елемент масиву - ${maxElement}, його порядковий номер - ${maxElementIndex}.

3. Визначити кількість негативних елементів - ${negativeCount}.

4. Знайти кількість непарних позитивних елементів - ${oddPositiveCount}.

5. Визначити кількість парних позитивних елементів - ${evenPositiveCount}.

6. Знайти суму парних позитивних елементів - ${evenPositiveSum}.

7. Знайти суму непарних позитивних елементів - ${oddPositiveSum}.

8. Знайти добуток позитивних елементів - ${positiveNumbersMult}.
`);
