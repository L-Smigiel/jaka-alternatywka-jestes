/*
A - Alternatywka Metalówa
B - Niealternatywka
C - Rapalternatywka
D - Zwykła Alternatywka

*/

export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: 'Jakiej słuchasz muzyki?',
        answers: [
          { text: 'Metal', points: { A: 5, B: 0, C: 0, D: 0 } },
          { text: 'Rap', points: { A: 0, B: 0, C: 5, D: 0 } },
          { text: 'Każdej', points: { A: 5, B: 5, C: 3, D: 3 } },
          { text: 'Nieważne', points: { A: 0, B: 0, C: 5, D: 5 } },
        ],
        correctAnswer: 'Metal',
      },
      {
        id: 2,
        question: 'Masz farbowane włosy?',
        answers: [
          { text: 'Tak', points: { A: 5, B: 0, C: 5, D: 5 } },
          { text: 'Nie', points: { A: 0, B: 5, C: 3, D: 0 } },
          { text: 'Nie wiem', points: { A: 0, B: 3, C: 3, D: 0 } },
          { text: 'Nie powiem', points: { A: 0, B: 0, C: 0, D: 0 } },
        ],
      },
      {
        id: 3,
        question: 'Gdybyś była zwierzęciem, jakim byś była?',
        answers: [
          { text: 'Kot', points: { A: 0, B: 5, C: 0, D: 5 } },
          { text: 'Pies', points: { A: 3, B: 5, C: 3, D: 0 } },
          { text: 'Wilk', points: { A: 5, B: 0, C: 5, D: 3 } },
          { text: 'Pająk', points: { A: 0, B: 0, C: 5, D: 5 } },
        ]
      },
      {
        id: 4,
        question: 'Jakie masz hobby?',
        answers: [
          { text: 'Sztuka', points: { A: 5, B: 0, C: 5, D: 5 } },
          { text: 'Podróżowanie', points: { A: 0, B: 5, C: 0, D: 0 } },
          { text: 'Zakupy', points: { A: 0, B: 5, C: 3, D: 5 } },
          { text: 'Książki', points: { A: 0, B: 3, C: 3, D: 3 } },
        ]
      },
      {
        id: 5,
        question: 'Jaki jest twój ulubiony napój?',
        answers: [
          { text: 'Cola', points: { A: 5, B: 0, C: 0, D: 0 } },
          { text: 'Sok', points: { A: 0, B: 5, C: 0, D: 0 } },
          { text: 'Koktajl', points: { A: 0, B: 5, C: 5, D: 3 } },
          { text: 'Piwko', points: { A: 5, B: 0, C: 0, D: 5 } },
        ]
      },
    ],
  };
  