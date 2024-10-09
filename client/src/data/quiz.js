/**
 * @typedef {Object} Question
 * @property {string} question - The question text to be presented in the quiz.
 * @property {string[]} choices - An array of possible answer choices for the question.
 * @property {string} type - The type of question (e.g., 'MCQs' for multiple-choice questions).
 * @property {string} correctAnswer - The correct answer to the question, matching one of the choices.
 */

/**
 * A foundation-level quiz object for the topic of Machine Learning.
 * This quiz contains multiple-choice questions designed to test foundational knowledge in the subject.
 * 
 * @type {Object}
 * @property {string} topic - The topic of the quiz, representing the subject matter being tested.
 * @property {string} level - The difficulty level of the quiz (e.g., 'foundation').
 * @property {number} totalQuestion - The total number of questions in the quiz.
 * @property {number} perQuestionScore - The score awarded for each correct answer.
 * @property {Question[]} questions - An array of questions included in the quiz, each with multiple choices and a correct answer.
 */



export const FoundationQuiz = {
    topic: 'Machine Learning', // The topic of the quiz, focusing on foundational concepts in Machine Learning.
    level: 'foundation', // The difficulty level of the quiz, set to 'foundation' to indicate basic-level questions.
    totalQuestion: 20, // The total number of questions in this quiz.
    perQuestionScore: 5, // The score that will be awarded for each correct answer.
  
    /**
     * The questions array contains the list of questions for the quiz. 
     * Each question is an object with a question text, multiple choices, 
     * and a correct answer.
     */
    questions: [
      {
        question: 'What is the first step in getting started with machine learning?', // The first quiz question.
        choices: ['Collecting data', 'Defining goals', 'Building models', 'Evaluating results'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Defining goals', // The correct answer to this question.
      },
      {
        question: 'Which step comes first in the machine learning process?', // The second quiz question.
        choices: ['Model selection', 'Data collection and preparation', 'Model training and evaluation', 'Feature engineering'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Data collection and preparation', // The correct answer to this question.
      },
      {
        question: 'Probability theory is essential in machine learning for:', // The third quiz question.
        choices: ['Data preprocessing', 'Model evaluation', 'Feature engineering', 'Handling uncertainty and randomness'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Handling uncertainty and randomness', // The correct answer to this question.
      },
      {
        question: 'What does hypothesis testing involve in statistical methods?', // The fourth quiz question.
        choices: ['Estimating parameters of a distribution', 'Comparing sample means or proportions', 'Constructing confidence intervals', 'Performing feature selection'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Comparing sample means or proportions', // The correct answer to this question.
      },
      {
        question: 'Which mathematical concept is fundamental to understanding vector operations in machine learning?', // The fifth quiz question.
        choices: ['Scalars', 'Matrices', 'Vectors', 'Eigenvalues'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Vectors', // The correct answer to this question.
      },
      {
        question: 'What is the primary goal of optimization in machine learning?', // The sixth quiz question.
        choices: ['Maximizing accuracy', 'Minimizing loss or error', 'Maximizing interpretability', 'Minimizing computational complexity'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Minimizing loss or error', // The correct answer to this question.
      },
      {
        question: 'In calculus, what does the derivative of a function represent?', // The seventh quiz question.
        choices: ['The slope of the tangent line', 'The area under the curve', 'The limit of the function', 'The integral of the function'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'The slope of the tangent line', // The correct answer to this question.
      },
      {
        question: 'What comes after defining goals in the machine learning process?', // The eighth quiz question.
        choices: ['Collecting data', 'Model selection', 'Exploratory data analysis', 'Model deployment'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Collecting data', // The correct answer to this question.
      },
      {
        question: 'What is a key task in the data collection and preparation step?', // The ninth quiz question.
        choices: ['Model deployment', 'Data visualization', 'Model training', 'Feature selection'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Data visualization', // The correct answer to this question.
      },
      {
        question: 'What is the probability of an event that is certain to happen?', // The tenth quiz question.
        choices: ['0', '1', '0.5', '-1'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: '1', // The correct answer to this question.
      },
      {
        question: 'Which statistical measure describes the spread or dispersion of data points?', // The eleventh quiz question.
        choices: ['Mean', 'Median', 'Variance', 'Mode'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Variance', // The correct answer to this question.
      },
      {
        question: 'Which operation involves finding the dot product of two vectors?', // The twelfth quiz question.
        choices: ['Matrix multiplication', 'Matrix addition', 'Scalar multiplication', 'Cross product'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Cross product', // The correct answer to this question.
      },
      {
        question: 'What does the learning rate control in optimization algorithms?', // The thirteenth quiz question.
        choices: ['The speed of convergence', 'The size of the dataset', 'The number of iterations', 'The complexity of the model'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'The speed of convergence', // The correct answer to this question.
      },
      {
        question: 'What does the integral of a function represent geometrically?', // The fourteenth quiz question.
        choices: ['The slope of the tangent line', 'The area under the curve', 'The limit of the function', 'The derivative of the function'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'The area under the curve', // The correct answer to this question.
      },
      {
        question: 'Which step involves understanding the problem and defining objectives in machine learning?', // The fifteenth quiz question.
        choices: ['Model deployment', 'Data collection and preparation', 'Model training and evaluation', 'Defining goals'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Defining goals', // The correct answer to this question.
      },
      {
        question: 'What is a key task in the model training and evaluation step?', // The sixteenth quiz question.
        choices: ['Data visualization', 'Hyperparameter tuning', 'Feature selection', 'Data preprocessing'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Hyperparameter tuning', // The correct answer to this question.
      },
      {
        question: 'What is the probability of the complement of an event?', // The seventeenth quiz question.
        choices: ['The probability of the event itself', '0', '1', 'The difference between 1 and the probability of the event'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'The difference between 1 and the probability of the event', // The correct answer to this question.
      },
      {
        question: 'Which statistical measure is robust to outliers?', // The eighteenth quiz question.
        choices: ['Mean', 'Median', 'Mode', 'Standard deviation'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Median', // The correct answer to this question.
      },
      {
        question: 'What is the determinant of an identity matrix?', // The nineteenth quiz question.
        choices: ['0', '1', '-1', 'It varies depending on the size of the matrix'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: '1', // The correct answer to this question.
      },
      {
        question: 'What is the objective of gradient descent optimization?', // The twentieth quiz question.
        choices: ['Maximizing the cost function', 'Minimizing the cost function', 'Finding the global maximum', 'Balancing the bias-variance tradeoff'], // Array of possible answers.
        type: 'MCQs', // The type of question, indicating it is a multiple-choice question.
        correctAnswer: 'Minimizing the cost function', // The correct answer to this question.
      },
    ]
  }
  

/**
 * @typedef {Object} Question
 * @property {string} question - The question text to be presented in the quiz.
 * @property {string[]} choices - An array of possible answer choices for the question.
 * @property {string} type - The type of question (e.g., 'MCQs' for multiple-choice questions).
 * @property {string} correctAnswer - The correct answer to the question, matching one of the choices.
 */

/**
 * A beginner-level quiz object for the topic of Machine Learning.
 * This quiz contains multiple-choice questions designed to test basic knowledge in the subject.
 * 
 * @type {Object}
 * @property {string} topic - The topic of the quiz, representing the subject matter being tested.
 * @property {string} level - The difficulty level of the quiz (e.g., 'beginner').
 * @property {number} totalQuestion - The total number of questions in the quiz.
 * @property {number} perQuestionScore - The score awarded for each correct answer.
 * @property {Question[]} questions - An array of questions included in the quiz, each with multiple choices and a correct answer.
 */
export const BeginnerQuiz = {
    topic: 'Machine Learning', // The topic of the quiz, focusing on introductory concepts in Machine Learning.
    level: 'beginner', // The difficulty level of the quiz, set to 'beginner' to indicate basic-level questions.
    totalQuestion: 20, // The total number of questions in this quiz.
    perQuestionScore: 5, // The score that will be awarded for each correct answer.

    /**
     * The questions array contains the list of questions for the quiz. 
     * Each question is an object with a question text, multiple choices, 
     * and a correct answer.
     */
    questions: [
      {
          question: "Which of the following is a valid Python variable name?", // The first quiz question.
          choices: ["1variable_name", "variableName", "variable name", "variable-name"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "variableName" // The correct answer to this question.
      },
      {
          question: "Which machine learning algorithm is used for classification tasks and works by finding the best linear decision boundary between classes?", // The second quiz question.
          choices: ["K-means clustering", "Linear regression", "Decision trees", "Support Vector Machines (SVM)"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "Support Vector Machines (SVM)" // The correct answer to this question.
      },
      {
          question: "Which of the following is a popular open-source software for machine learning and data mining?", // The third quiz question.
          choices: ["Weka", "TensorFlow", "PyTorch", "scikit-learn"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "Weka" // The correct answer to this question.
      },
      {
          question: "Which Python library provides tools for data mining and data analysis, including various machine learning algorithms?", // The fourth quiz question.
          choices: ["NumPy", "Pandas", "Matplotlib", "scikit-learn"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "scikit-learn" // The correct answer to this question.
      },
      {
          question: "Which R package provides a unified interface for various machine learning algorithms and facilitates model training, testing, and evaluation?", // The fifth quiz question.
          choices: ["ggplot2", "dplyr", "caret", "tidyr"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "caret" // The correct answer to this question.
      },
      {
          question: "What is the primary objective of time series forecasting?", // The sixth quiz question.
          choices: ["Predicting future events based on historical data", "Classifying data into categories", "Clustering similar data points", "Summarizing data distribution"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "Predicting future events based on historical data" // The correct answer to this question.
      },
      {
          question: "Which of the following is a common step in data preparation?", // The seventh quiz question.
          choices: ["Model training", "Model deployment", "Data cleaning", "Model evaluation"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "Data cleaning" // The correct answer to this question.
      },
      {
          question: "What does the len() function do in Python?", // The eighth quiz question.
          choices: ["Calculates logarithm", "Computes the length of a string or list", "Returns the maximum value in a list", "Rounds a floating-point number"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "Computes the length of a string or list" // The correct answer to this question.
      },
      {
          question: "Which algorithm is used for regression tasks and predicts continuous numeric values?", // The ninth quiz question.
          choices: ["Decision trees", "K-nearest neighbors (KNN)", "Logistic regression", "Random forests"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "Decision trees" // The correct answer to this question.
      },
      {
          question: "What is the main advantage of using Weka for machine learning tasks?", // The tenth quiz question.
          choices: ["It supports only a limited number of algorithms", "It requires advanced programming skills", "It provides a user-friendly graphical interface", "It is primarily used for deep learning"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "It provides a user-friendly graphical interface" // The correct answer to this question.
      },
      {
          question: "Which scikit-learn module is used for model evaluation and selection?", // The eleventh quiz question.
          choices: ["sklearn.preprocessing", "sklearn.feature_extraction", "sklearn.model_selection", "sklearn.metrics"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "sklearn.model_selection" // The correct answer to this question.
      },
      {
          question: "Which function is used to train a machine learning model in the caret package?", // The twelfth quiz question.
          choices: ["fit()", "train()", "predict()", "evaluate()"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "train()" // The correct answer to this question.
      },
      {
          question: "What is seasonality in time series data?", // The thirteenth quiz question.
          choices: ["The overall trend of the data", "The daily fluctuations in data", "The repetitive pattern at fixed intervals", "The random noise in data"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "The repetitive pattern at fixed intervals" // The correct answer to this question.
      },
      {
          question: "What is one way to handle missing values in a dataset?", // The fourteenth quiz question.
          choices: ["Remove the entire row with missing values", "Replace missing values with the mean of the column", "Replace missing values with the mode of the column", "Ignore missing values during analysis"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "Replace missing values with the mean of the column" // The correct answer to this question.
      },
      {
          question: "What does the sorted() function do in Python?", // The fifteenth quiz question.
          choices: ["Removes duplicates from a list", "Sorts a list in ascending order", "Returns the sum of a list", "Reverses the order of a list"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "Sorts a list in ascending order" // The correct answer to this question.
      },
      {
          question: "Which algorithm is suitable for handling non-linear relationships between features and target variables?", // The sixteenth quiz question.
          choices: ["Linear regression", "Decision trees", "Logistic regression", "K-means clustering"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "Decision trees" // The correct answer to this question.
      },
      {
          question: "Which file format is commonly used to import datasets into Weka?", // The seventeenth quiz question.
          choices: [".csv", ".txt", ".xls", ".json"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: ".csv" // The correct answer to this question.
      },
      {
          question: "Which scikit-learn module is used for feature extraction and preprocessing?", // The eighteenth quiz question.
          choices: ["sklearn.preprocessing", "sklearn.model_selection", "sklearn.feature_selection", "sklearn.metrics"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "sklearn.preprocessing" // The correct answer to this question.
      },
      {
          question: "Which function is used to make predictions using a trained model in the caret package?", // The nineteenth quiz question.
          choices: ["fit()", "train()", "predict()", "evaluate()"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "predict()" // The correct answer to this question.
      },
      {
          question: "What is autocorrelation in time series analysis?", // The twentieth quiz question.
          choices: ["The correlation between different variables", "The correlation between successive observations", "The correlation between past and future values", "The correlation between outliers in the data"], // Array of possible answers.
          type: "MCQs", // The type of question, indicating it is a multiple-choice question.
          correctAnswer: "The correlation between successive observations" // The correct answer to this question.
      }
    ]
}



/**
 * IntermediateQuiz object represents a quiz configuration for machine learning topics.
 * It includes the topic, level, total questions, per question score, and an array of questions.
 */
export const IntermediateQuiz = {
    // The topic of the quiz, specifying the subject matter covered in the questions.
    topic: 'Machine Learning',
  
    // The difficulty level of the quiz, indicating it is intended for intermediate-level learners.
    level: 'intermediate',
  
    // The total number of questions included in the quiz.
    totalQuestion: 20,
  
    // The score awarded for each correct answer in the quiz.
    perQuestionScore: 5,
  
    // An array containing all the quiz questions, each with its own question, choices, type, and correct answer.
    questions: [
      {
          // The quiz question asking which Python library is commonly used for implementing machine learning algorithms.
          question: "Which of the following libraries is commonly used for implementing machine learning algorithms in Python?",
  
          // An array of possible answers to the quiz question.
          choices: ["Matplotlib", "Seaborn", "scikit-learn", "PyTorch"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "scikit-learn"
      },
      {
          // The quiz question asking about the main advantage of the XGBoost algorithm.
          question: "What is the main advantage of the XGBoost algorithm?",
  
          // An array of possible answers to the quiz question.
          choices: ["It is only suitable for small datasets", "It cannot handle missing values", "It is an ensemble method that combines multiple weak learners", "It is computationally less efficient compared to other algorithms"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "It is an ensemble method that combines multiple weak learners"
      },
      {
          // The quiz question asking about a common challenge in imbalanced classification problems.
          question: "What is a common challenge in imbalanced classification problems?",
  
          // An array of possible answers to the quiz question.
          choices: ["Overfitting", "Underfitting", "Class imbalance", "Feature engineering"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Class imbalance"
      },
      {
          // The quiz question asking which deep learning framework is known for its simplicity and ease of use, suitable for beginners.
          question: "Which deep learning framework is known for its simplicity and ease of use, suitable for beginners?",
  
          // An array of possible answers to the quiz question.
          choices: ["Keras", "PyTorch", "TensorFlow", "Theano"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Keras"
      },
      {
          // The quiz question asking about a key feature of PyTorch.
          question: "What is a key feature of PyTorch?",
  
          // An array of possible answers to the quiz question.
          choices: ["It provides dynamic computational graphs", "It is primarily used for symbolic programming", "It is built on top of Theano", "It has limited support for GPU acceleration"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "It provides dynamic computational graphs"
      },
      {
          // The quiz question asking which tasks can be performed using OpenCV in machine learning.
          question: "Which of the following tasks can be performed using OpenCV in machine learning?",
  
          // An array of possible answers to the quiz question.
          choices: ["Object detection", "Text classification", "Speech recognition", "Graph-based clustering"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Object detection"
      },
      {
          // The quiz question asking about the goal of better deep learning techniques.
          question: "What is the goal of better deep learning techniques?",
  
          // An array of possible answers to the quiz question.
          choices: ["Increasing model complexity", "Improving model interpretability", "Reducing training time", "Enhancing model performance and robustness"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Enhancing model performance and robustness"
      },
      {
          // The quiz question asking what ensemble learning is in machine learning.
          question: "What is ensemble learning in machine learning?",
  
          // An array of possible answers to the quiz question.
          choices: ["Training multiple models separately and averaging their predictions", "Training a single model with multiple datasets", "Using a single learning algorithm to boost performance", "Utilizing multiple GPUs for parallel computation"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Training multiple models separately and averaging their predictions"
      },
      {
          // The quiz question asking which of the following is NOT a step in implementing machine learning algorithms in code.
          question: "Which of the following is NOT a step in implementing machine learning algorithms in code?",
  
          // An array of possible answers to the quiz question.
          choices: ["Data preprocessing", "Model evaluation", "Feature selection", "Model deployment"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Model deployment"
      },
      {
          // The quiz question asking about one of the main advantages of using XGBoost over traditional gradient boosting.
          question: "What is one of the main advantages of using XGBoost over traditional gradient boosting?",
  
          // An array of possible answers to the quiz question.
          choices: ["XGBoost cannot handle missing values", "XGBoost is computationally slower", "XGBoost provides better regularization", "XGBoost is less flexible in handling different types of data"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "XGBoost provides better regularization"
      },
      {
          // The quiz question asking which technique can be used to handle class imbalance in classification tasks.
          question: "Which technique can be used to handle class imbalance in classification tasks?",
  
          // An array of possible answers to the quiz question.
          choices: ["Overfitting", "Feature scaling", "Upsampling the minority class", "Decreasing the learning rate"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Upsampling the minority class"
      },
      {
          // The quiz question asking which deep learning framework emphasizes dynamic computation graphs and imperative programming.
          question: "Which deep learning framework emphasizes dynamic computation graphs and imperative programming?",
  
          // An array of possible answers to the quiz question.
          choices: ["TensorFlow", "Keras", "PyTorch", "Theano"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "PyTorch"
      },
      {
          // The quiz question asking about a common application of machine learning in OpenCV.
          question: "What is a common application of ML in OpenCV?",
  
          // An array of possible answers to the quiz question.
          choices: ["Natural language processing", "Image processing and computer vision", "Speech recognition", "Time series analysis"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Image processing and computer vision"
      },
      {
          // The quiz question asking about the primary focus of better deep learning techniques.
          question: "What is the primary focus of better deep learning techniques?",
  
          // An array of possible answers to the quiz question.
          choices: ["Improving hardware efficiency", "Enhancing model interpretability", "Optimizing loss functions", "Improving model performance and robustness"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Improving model performance and robustness"
      },
      {
          // The quiz question asking about the main advantage of ensemble learning.
          question: "What is the main advantage of ensemble learning?",
  
          // An array of possible answers to the quiz question.
          choices: ["Simplifying model implementation", "Reducing computational complexity", "Improving model generalization and performance", "Increasing model interpretability"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Improving model generalization and performance"
      },
      {
          // The quiz question asking about one of the key steps in training a machine learning model.
          question: "What is one of the key steps in training a machine learning model?",
  
          // An array of possible answers to the quiz question.
          choices: ["Feature deployment", "Model evaluation", "Data visualization", "Hyperparameter tuning"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Hyperparameter tuning"
      },
      {
          // The quiz question asking which technique is commonly used for handling imbalanced datasets.
          question: "Which technique is commonly used for handling imbalanced datasets?",
  
          // An array of possible answers to the quiz question.
          choices: ["Random undersampling", "Data augmentation", "Feature scaling", "Increasing the learning rate"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Random undersampling"
      },
      {
          // The quiz question asking what distinguishes ensemble learning from traditional machine learning approaches.
          question: "What distinguishes ensemble learning from traditional machine learning approaches?",
  
          // An array of possible answers to the quiz question.
          choices: ["Ensemble learning relies on unsupervised learning techniques", "Ensemble learning combines multiple models to improve performance", "Ensemble learning is more computationally intensive", "Ensemble learning requires larger datasets"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "Ensemble learning combines multiple models to improve performance"
      },
      {
          // The quiz question asking about the role of feature engineering in machine learning.
          question: "What is the role of feature engineering in machine learning?",
  
          // An array of possible answers to the quiz question.
          choices: ["To deploy machine learning models", "To evaluate model performance", "To preprocess data for modeling", "To extract relevant features from raw data"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "To extract relevant features from raw data"
      },
      {
          // The quiz question asking about the purpose of regularization techniques in machine learning.
          question: "What is the purpose of regularization techniques in machine learning?",
  
          // An array of possible answers to the quiz question.
          choices: ["To increase model complexity", "To decrease model flexibility", "To reduce overfitting", "To amplify noise in the data"],
  
          // The type of the question, specifying it is a multiple-choice question (MCQs).
          type: "MCQs",
  
          // The correct answer to the quiz question.
          correctAnswer: "To reduce overfitting"
      }
    ]
  }
  

/**
 * @typedef {Object} Question
 * @property {string} question - The text of the quiz question.
 * @property {string[]} choices - An array of possible answer choices.
 * @property {string} type - The type of question, in this case, multiple-choice questions (MCQs).
 * @property {string} correctAnswer - The correct answer to the question.
 */

/**
 * @typedef {Object} Quiz
 * @property {string} topic - The topic of the quiz.
 * @property {string} level - The difficulty level of the quiz (e.g., beginner, intermediate, advanced).
 * @property {number} totalQuestion - The total number of questions in the quiz.
 * @property {number} perQuestionScore - The score awarded for each correct answer.
 * @property {Question[]} questions - An array of question objects, each containing the question text, answer choices, and the correct answer.
 */

/**
 * @type {Quiz}
 */
export const AdvanceQuiz = {
    // The topic of the quiz, which indicates the subject area being tested.
    topic: 'Machine Learning',

    // The difficulty level of the quiz, indicating it is aimed for the advance level.
    level: 'advance',

    // The total number of questions in the quiz, set to 20.
    totalQuestion: 20,

    // The score awarded for each correct answer, set to 5 points per question.
    perQuestionScore: 5,

    // An array containing all the questions in the quiz, each represented as an object with question text, choices, type, and correct answer.
    questions: [
        {
            // The text of the quiz question asking about the main advantage of LSTM networks over traditional RNNs.
            question: "What is the main advantage of Long Short-Term Memory (LSTM) networks over traditional recurrent neural networks (RNNs)?",

            // An array of possible answers to the quiz question.
            choices: ["LSTMs can only handle short sequences of data", "LSTMs are less computationally efficient", "LSTMs can capture long-term dependencies in data", "LSTMs require fewer training iterations"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "LSTMs can capture long-term dependencies in data"
        },
        {
            // The text of the quiz question asking which NLP task involves predicting the next word in a sequence.
            question: "Which natural language processing task involves predicting the next word in a sequence given the previous words?",

            // An array of possible answers to the quiz question.
            choices: ["Text classification", "Named entity recognition", "Machine translation", "Language modeling"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "Language modeling"
        },
        {
            // The text of the quiz question asking about the primary goal of computer vision.
            question: "What is the primary goal of computer vision?",

            // An array of possible answers to the quiz question.
            choices: ["Speech recognition", "Image classification", "Time series forecasting", "Natural language understanding"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "Image classification"
        },
        {
            // The text of the quiz question asking about the main advantage of using CNNs for time series analysis.
            question: "What is the main advantage of using convolutional neural networks (CNNs) for time series analysis?",

            // An array of possible answers to the quiz question.
            choices: ["CNNs automatically handle variable-length sequences", "CNNs can capture temporal dependencies in data", "CNNs are computationally less efficient", "CNNs are less susceptible to overfitting"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "CNNs can capture temporal dependencies in data"
        },
        {
            // The text of the quiz question asking about a key application of GANs in machine learning.
            question: "What is a key application of Generative Adversarial Networks (GANs) in machine learning?",

            // An array of possible answers to the quiz question.
            choices: ["Image classification", "Time series analysis", "Data augmentation", "Speech recognition"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "Data augmentation"
        },
        {
            // The text of the quiz question asking about the purpose of attention mechanisms in deep learning models.
            question: "What is the purpose of attention mechanisms in deep learning models?",

            // An array of possible answers to the quiz question.
            choices: ["To increase model complexity", "To reduce model interpretability", "To improve model performance on specific parts of the input", "To introduce randomness in model predictions"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "To improve model performance on specific parts of the input"
        },
        {
            // The text of the quiz question asking about a key component of Transformer models used in NLP.
            question: "What is a key component of Transformer models used in natural language processing?",

            // An array of possible answers to the quiz question.
            choices: ["Convolutional layers", "Recurrent layers", "Attention mechanisms", "Pooling layers"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "Attention mechanisms"
        },
        {
            // The text of the quiz question asking about what distinguishes LSTMs from traditional RNNs.
            question: "What distinguishes Long Short-Term Memory (LSTM) networks from traditional recurrent neural networks (RNNs)?",

            // An array of possible answers to the quiz question.
            choices: ["LSTMs have a simpler architecture", "LSTMs can only process sequential data", "LSTMs can retain information over long sequences", "LSTMs are less susceptible to vanishing gradients"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "LSTMs can retain information over long sequences"
        },
        {
            // The text of the quiz question asking which machine learning task involves processing and understanding human language.
            question: "Which machine learning task involves processing and understanding human language?",

            // An array of possible answers to the quiz question.
            choices: ["Image classification", "Speech recognition", "Natural language processing", "Time series analysis"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "Natural language processing"
        },
        {
            // The text of the quiz question asking about the primary objective of computer vision.
            question: "What is the primary objective of computer vision?",

            // An array of possible answers to the quiz question.
            choices: ["To analyze and interpret visual data", "To process and understand human language", "To recognize and classify speech signals", "To forecast future events based on historical data"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "To analyze and interpret visual data"
        },
        {
            // The text of the quiz question asking about the primary advantage of using CNNs for image classification.
            question: "What is the primary advantage of using Convolutional Neural Networks (CNNs) for image classification?",

            // An array of possible answers to the quiz question.
            choices: ["They can process variable-length sequences", "They automatically extract relevant features from images", "They require fewer parameters compared to other models", "They are less computationally intensive"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "They automatically extract relevant features from images"
        },
        {
            // The text of the quiz question asking about the main purpose of using GANs in machine learning.
            question: "What is the main purpose of using Generative Adversarial Networks (GANs) in machine learning?",

            // An array of possible answers to the quiz question.
            choices: ["To improve model interpretability", "To generate realistic synthetic data", "To reduce computational complexity", "To perform dimensionality reduction"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "To generate realistic synthetic data"
        },
        {
            // The text of the quiz question asking about the role of attention mechanisms in deep learning models.
            question: "What is the role of attention mechanisms in deep learning models?",

            // An array of possible answers to the quiz question.
            choices: ["To increase model complexity", "To reduce model interpretability", "To improve model performance on specific parts of the input", "To introduce randomness in model predictions"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "To improve model performance on specific parts of the input"
        },
        {
            // The text of the quiz question asking about a key component of Transformer models used in NLP.
            question: "What is a key component of Transformer models used in natural language processing?",

            // An array of possible answers to the quiz question.
            choices: ["Convolutional layers", "Recurrent layers", "Attention mechanisms", "Pooling layers"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "Attention mechanisms"
        },
        {
            // The text of the quiz question asking about what distinguishes LSTMs from traditional RNNs.
            question: "What distinguishes Long Short-Term Memory (LSTM) networks from traditional recurrent neural networks (RNNs)?",

            // An array of possible answers to the quiz question.
            choices: ["LSTMs have a simpler architecture", "LSTMs can only process sequential data", "LSTMs can retain information over long sequences", "LSTMs are less susceptible to vanishing gradients"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "LSTMs can retain information over long sequences"
        },
        {
            // The text of the quiz question asking which machine learning task involves processing and understanding human language.
            question: "Which machine learning task involves processing and understanding human language?",

            // An array of possible answers to the quiz question.
            choices: ["Image classification", "Speech recognition", "Natural language processing", "Time series analysis"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "Natural language processing"
        },
        {
            // The text of the quiz question asking about the primary objective of computer vision.
            question: "What is the primary objective of computer vision?",

            // An array of possible answers to the quiz question.
            choices: ["To analyze and interpret visual data", "To process and understand human language", "To recognize and classify speech signals", "To forecast future events based on historical data"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "To analyze and interpret visual data"
        },
        {
            // The text of the quiz question asking how CNNs and LSTMs can be combined for time series analysis.
            question: "How can CNNs and LSTMs be combined for time series analysis?",

            // An array of possible answers to the quiz question.
            choices: ["CNN extracts features from each time step, then LSTM learns the temporal relationships", "CNN learns overall patterns, then LSTM predicts future values", "LSTM captures long-term trends, then CNN refines predictions for specific time points", "They cannot be effectively combined for time series tasks"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "CNN extracts features from each time step, then LSTM learns the temporal relationships"
        },
        {
            // The text of the quiz question asking about a limitation of self-attention mechanisms in Transformers.
            question: "What is a limitation of self-attention mechanisms in Transformers?",

            // An array of possible answers to the quiz question.
            choices: ["They cannot capture hierarchical relationships in text", "They require large amounts of labeled training data", "They are computationally expensive for long sequences", "They are not effective for tasks beyond natural language processing"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "They are computationally expensive for long sequences."
        },
        {
            // The text of the quiz question asking about the role of the discriminator during training in a GAN.
            question: "During training, what is the role of the discriminator in a Generative Adversarial Network (GAN)?",

            // An array of possible answers to the quiz question.
            choices: ["Provides labels for the training data", "Generates new data samples", "Evaluates the realism of generated data.s", "Optimizes the hyperparameters of the generator"],

            // The type of the question, specifying it is a multiple-choice question (MCQs).
            type: "MCQs",

            // The correct answer to the quiz question.
            correctAnswer: "Generates new data samples"
        },
    ]
}

/**
 * @typedef {Object} Question
 * @property {string} question - The text of the quiz question.
 * @property {string[]} choices - An array of possible answer choices.
 * @property {string} correctAnswer - The correct answer to the question.
 * @property {string} type - The type of question, e.g., multiple-choice questions (MCQs).
 */

/**
 * @typedef {Object} AssessmentQuiz
 * @property {string} topic - The topic of the quiz, indicating what the quiz is about.
 * @property {string} level - The level or type of the quiz, in this case, a readiness assessment.
 * @property {number} totalQuestion - The total number of questions in the quiz.
 * @property {Question[]} questions - An array of question objects, each containing the question text, answer choices, correct answer, and type.
 */

/**
 * The AssessmentQuiz object represents a machine learning readiness assessment quiz.
 * 
 * @type {AssessmentQuiz}
 */
export const AssessmentQuiz = {
    // The topic of the quiz, indicating that it assesses readiness in machine learning.
    topic: 'Machine Learning Readiness Assessment Quiz',
  
    // The level of the quiz, indicating that it is a readiness assessment.
    level: 'assessment',
  
    // The total number of questions included in the quiz.
    totalQuestion: 10,
  
    // An array of questions in the quiz, each represented as an object with question text, answer choices, correct answer, and question type.
    questions: [
      {
        // The text of the quiz question asking about the definition of machine learning.
        question: 'What is machine learning?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'A type of data entry', 
          'A way to teach computers to make decisions using data', 
          'A method for building websites', 
          'A tool for creating animations'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'A way to teach computers to make decisions using data',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
      {
        // The text of the quiz question asking about a common type of machine learning.
        question: 'Which of these is a common type of machine learning?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'Automated drawing', 
          'Supervised learning', 
          'Video editing', 
          'Website hosting'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'Supervised learning',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
      {
        // The text of the quiz question asking about the definition of a dataset.
        question: 'What is a dataset?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'A collection of data used for training models', 
          'A type of software application', 
          'A set of rules for coding', 
          'A group of web pages'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'A collection of data used for training models',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
      {
        // The text of the quiz question asking about the purpose of training a model in machine learning.
        question: 'What is the purpose of training a model in machine learning?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'To predict outcomes based on data', 
          'To create graphics', 
          'To format text', 
          'To manage files'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'To predict outcomes based on data',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
      {
        // The text of the quiz question asking for an example of a machine learning model.
        question: 'Which of these is an example of a machine learning model?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'Word processor', 
          'Linear regression', 
          'Web browser', 
          'Spreadsheet'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'Linear regression',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
      {
        // The text of the quiz question asking about overfitting in machine learning.
        question: 'What is overfitting in machine learning?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'A model that performs well on training data but poorly on new data', 
          'A type of graph', 
          'A way to clean data', 
          'A method for storing files'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'A model that performs well on training data but poorly on new data',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
      {
        // The text of the quiz question asking about what "k" represents in k-means clustering.
        question: 'What does "k" represent in k-means clustering?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'The number of clusters', 
          'The size of the dataset', 
          'The number of data points', 
          'The depth of a decision tree'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'The number of clusters',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
      {
        // The text of the quiz question asking about the purpose of cross-validation.
        question: 'What is cross-validation used for?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'To evaluate the model’s performance on different data splits', 
          'To build a website', 
          'To edit a video', 
          'To write a program'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'To evaluate the model’s performance on different data splits',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
      {
        // The text of the quiz question asking about a metric used to evaluate classification models.
        question: 'Which of these is used to evaluate a classification model?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'Accuracy', 
          'Pixels per inch', 
          'Page load time', 
          'Word count'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'Accuracy',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
      {
        // The text of the quiz question asking about the definition of a neural network.
        question: 'What is a neural network?',
  
        // An array of possible answers to the quiz question.
        choices: [
          'A model inspired by the human brain', 
          'A type of internet connection', 
          'A system for sending emails', 
          'A method for storing images'
        ],
  
        // The correct answer to the quiz question.
        correctAnswer: 'A model inspired by the human brain',
  
        // The type of the question, specifying it is a multiple-choice question (MCQs).
        type: 'MCQs',
      },
    ],
  };
  