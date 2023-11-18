

// Sample question store (can be replaced by a database)
const questionStore = [
    {
      question: "What is the speed of light?",
      subject: "Physics",
      topic: "Waves",
      difficulty: "Easy",
      marks: 5
    },
    {
        question: "Define acceleration.",
        subject: "Physics",
        topic: "Motion",
        difficulty: "Easy",
        marks: 5
    },
    {
        question: "Explain the concept of force.",
        subject: "Physics",
        topic: "Mechanics",
        difficulty: "Medium",
        marks: 10
    },
    {
        question: "Derive the formula for gravitational force.",
        subject: "Physics",
        topic: "Gravitation",
        difficulty: "Hard",
        marks: 15
    },
    {
        question: "What is the chemical formula for water?",
        subject: "Chemistry",
        topic: "Inorganic Chemistry",
        difficulty: "Easy",
        marks: 5
    },
    {
        question: "Name the different types of chemical reactions.",
        subject: "Chemistry",
        topic: "Chemical Reactions",
        difficulty: "Medium",
        marks: 10
    },
    {
      question: "Describe the structure of an atom.",
      subject: "Physics",
      topic: "Atomic Structure",
      difficulty: "Easy",
      marks: 5
  },
  {
      question: "Explain the concept of nuclear fission.",
      subject: "Physics",
      topic: "Nuclear Physics",
      difficulty: "Medium",
      marks: 10
  },
  {
     question: "Derive the equation for kinetic energy.",
      subject: "Physics",
      topic: "Mechanics",
      difficulty: "Hard",
      marks: 15
  },
  {
      question: "Explain the concept of electrolysis.",
      subject: "Chemistry",
      topic: "Electrochemistry",
      difficulty: "Medium",
      marks: 10
  },
  {
      question: "Name the different types of organic compounds.",
      subject: "Chemistry",
      topic: "Organic Chemistry",
      difficulty: "Medium",
      marks: 10
  },
  {
      question: "Describe the process of photosynthesis.",
      subject: "Biology",
      topic: "Plant Physiology",
      difficulty: "Easy",
      marks: 5
  },
  {
      question: "Explain the structure and function of DNA.",
      subject: "Biology",
      topic: "Genetics",
      difficulty: "Medium",
      marks: 10
  },
  {
      question: "Discuss the different types of ecosystems.",
      subject: "Biology",
      topic: "Ecology",
      difficulty: "Medium",
      marks: 10
  },
  {
      question: "Explain the concept of supply and demand in economics.",
      subject: "Economics",
      topic: "Microeconomics",
      difficulty: "Easy",
      marks: 5
  },
  {
      question: "Describe the different types of government systems.",
      subject: "Social Studies",
      topic: "Political Science",
      difficulty: "Medium",
      marks: 10
  },
  {
      question: "Discuss the causes and effects of the American Civil War.",
      subject: "History",
      topic: "American History",
      difficulty: "Medium",
      marks: 10
  },
  {
      question: "Explain the concept of relativity in physics.",
      subject: "Physics",
      topic: "Modern Physics",
      difficulty: "Hard",
      marks: 15
  },
  {
      questio: "Derive the equation for the ideal gas law.",
      subject: "Physics",
      topic: "Thermodynamics",
      difficulty: "Hard",
      marks: 15
  },
  {
      question: "Explain the principles of wave mechanics.",
      subject: "Physics",
      topic: "Quantum Mechanics",
      difficulty: "Hard",
      marks: 15
  },
  {
      question: "Describe the structure of the Earth's atmosphere.",
      subject: "Earth Science",
      topic: "Meteorology",
      difficulty: "Easy",
      marks: 5
  },
  {
      question: "Explain the process of plate tectonics.",
      subject: "Earth Science",
      topic: "Geology",
      difficulty: "Medium",
      marks: 10
  },
  {
      question: "Discuss the different types of rocks and their formation.",
      subject: "Earth Science",
      topic: "Mineralogy and Petrology",
      difficulty: "Medium",
      mark: 15
  },

  {
    question: "State the laws of thermodynamics.",
      subject: "Chemistry",
      topic: "Heat and thermodynamics",
      difficulty: "Medium",
      mark: 5
  },
    // Add more questions here
  ];
  
  function generateQuestionPaper() {
    const totalMarks = parseInt(document.getElementById('totalMarks').value);
    const distribution = {
      Easy: 0.2,
      Medium: 0.5,
      Hard: 0.3
    };
  
    const questionPaper = [];
  
    // Calculate the number of questions needed for each difficulty level
    const easyMarks = totalMarks * distribution.Easy;
    const mediumMarks = totalMarks * distribution.Medium;
    const hardMarks = totalMarks * distribution.Hard;
  
    // Filter questions based on difficulty level
    const easyQuestions = questionStore.filter(question => question.difficulty === 'Easy');
    const mediumQuestions = questionStore.filter(question => question.difficulty === 'Medium');
    const hardQuestions = questionStore.filter(question => question.difficulty === 'Hard');
  
    // Function to randomly select questions from an array
    function selectQuestions(questions, numMarks) {
      let selectedQuestions = [];
      let marksCount = 0;
  
      while (marksCount < numMarks && questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const selectedQuestion = questions.splice(randomIndex, 1)[0];
  
        if (marksCount + selectedQuestion.marks <= numMarks) {
          selectedQuestions.push(selectedQuestion);
          marksCount += selectedQuestion.marks;
        }
      }
  
      return selectedQuestions;
    }
  
    // Select questions based on the calculated marks for each difficulty level
    const selectedEasyQuestions = selectQuestions(easyQuestions, easyMarks);
    const selectedMediumQuestions = selectQuestions(mediumQuestions, mediumMarks);
    const selectedHardQuestions = selectQuestions(hardQuestions, hardMarks);
  
    // Combine all selected questions into the final question paper
    questionPaper.push(...selectedEasyQuestions, ...selectedMediumQuestions, ...selectedHardQuestions);
  
    // Display the generated question paper
    displayQuestionPaper(questionPaper);
  }
  
  function displayQuestionPaper(questionPaper) {
    const questionPaperContainer = document.getElementById('questionPaper');
    questionPaperContainer.innerHTML = '';
  
    if (questionPaper.length === 0) {
      questionPaperContainer.textContent = 'No questions found for the given criteria.';
      return;
    }
  
    const ul = document.createElement('ul');
  
    questionPaper.forEach(question => {
      const li = document.createElement('li');
      li.textContent = `Question: ${question.question} | Subject: ${question.subject} | Difficulty: ${question.difficulty} | Marks: ${question.marks}`;
      ul.appendChild(li);
    });
  
    questionPaperContainer.appendChild(ul);
  }
  