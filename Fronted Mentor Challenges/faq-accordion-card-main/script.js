const FAQSDATA = [
  {
    question: 'How many team members can I invite?',
    answer: 'There is no limit on team members for the Premium plan.',
  },
  {
    question: 'What is the maximum file upload size?',
    answer:
      'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    question: 'How do I reset my password?',
    answer:
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Yes! Send us a message and we’ll process your request no questions asked.',
  },
  {
    question: 'Do you provide additional support?',
    answer:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

const right_wrapper = document.getElementById('right-wrapper');
const faq_items = document.getElementById('faq__items');

// faq_items.innerHTML = FAQSDATA.map((faq) => {
//   return `
//       <div class='faq'>
//         <h4 class='faq__question'>${faq.question}</h4>
//         <p class='faq__answer'>${faq.answer}</p>
//         </div>
//         `;
// });

let currentActive = null;

const faq_QuestionDOM = Array.from(
  document.getElementsByClassName('faq__question')
);

faq_QuestionDOM.forEach((que) => {
  que.addEventListener('click', (e) => {
    if (e.target.dataset['number'] != currentActive && currentActive != null) {
      removeActiveClass(currentActive);
      // setTimeout(() => {
      toggleActiveClass(e);
      // }, 300);
    } else {
      toggleActiveClass(e);
    }
    currentActive = e.target.dataset['number'];
  });
});

const removeActiveClass = (ca) => {
  faq_QuestionDOM.forEach((que) => {
    if (que.dataset['number'] == ca) {
      que.parentElement.classList.remove('active');
    }
  });
};

const addActiveClass = (que) => {
  que.target.parentElement.classList.add('active');
};

const toggleActiveClass = (que) => {
  que.target.parentElement.classList.toggle('active');
};
