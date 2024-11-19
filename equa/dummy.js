// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch user data from API
//     fetchUserData();
//   });
  
//   async function fetchUserData() {
//     try {
//       const response = await fetch('/api/user-data');
//       const data = await response.json();
//       updateDashboard(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   }
  
//   function updateDashboard(userData) {
//     // Update personalized welcome message
//     updateWelcomeMessage(userData.userName);
  
//     // Update financial overview
//     updateFinancialOverview(userData);
  
//     // Update monthly budget chart
//     updateBudgetChart(userData.budget);
  
//     // Update upcoming bills list
//     updateBillsList(userData.bills);
  
//     // Update savings goals
//     updateSavingsGoals(userData.savingsGoals);
  
//     // Update debt balances
//     updateDebtBalances(userData.debtBalances);
  
//     // Update financial tips
//     updateFinancialTips(userData.financialTips);
  
//     // Update insights and alerts
//     updateInsightsAlerts(userData.insights);
  
//     // Update investment portfolio
//     updateInvestmentPortfolio(userData.investments);
  
//     // Update expense breakdown
//     updateExpenseBreakdown(userData.expenses);
  
//     // Update quick actions
//     updateQuickActions();
  
//     // Update educational content
//     updateEducationalContent(userData.educationalResources);
  
//     // Update community feed
//     updateCommunitySocialFeed(userData.communityFeed);
  
//     // Update notifications and alerts
//     updateNotificationsAlerts(userData.alerts);
  
//     // Update financial calculators
//     updateFinancialCalculators();
  
//     // Update user profile and settings
//     updateUserProfileSettings(userData.userProfile, userData.userSettings);
  
//     // Update chatbot and support
//     updateChatbotSupport();
  
//     // Update life event simulator
//     updateLifeEventSimulator();
//   }
  
//   function updateWelcomeMessage(userName) {
//     const welcomeMessage = document.querySelector('.welcome-message h1');
//     welcomeMessage.textContent = `Welcome back, ${userName}!`;
//   }
  
//   function updateFinancialOverview(userData) {
//     document.getElementById('net-worth').textContent = `$${userData.netWorth.toLocaleString()}`;
//     document.getElementById('cash-flow').textContent = `$${userData.cashFlow.toLocaleString()}`;
//     document.getElementById('debts').textContent = `$${userData.debts.toLocaleString()}`;
//     document.getElementById('investments').textContent = `$${userData.investments.toLocaleString()}`;
//   }
  
//   function updateBudgetChart(budgetData) {
//     // Use a charting library (e.g., Recharts) to update the budget chart
//   }
  
//   function updateBillsList(billsData) {
//     const billsList = document.getElementById('bills-list');
//     billsList.innerHTML = '';
  
//     billsData.forEach((bill) => {
//       const billItem = document.createElement('li');
//       billItem.innerHTML = `
//         <div>${bill.name}</div>
//         <div>$${bill.amount.toLocaleString()}</div>
//         <div>${bill.dueDate}</div>
//         <button>Pay</button>
//       `;
//       billsList.appendChild(billItem);
//     });
//   }
  
//   function updateSavingsGoals(goalsData) {
//     const goalsContainer = document.getElementById('savings-goals');
//     goalsContainer.innerHTML = '';
  
//     goalsData.forEach((goal) => {
//       const goalItem = document.createElement('div');
//       goalItem.classList.add('goal-item');
//       goalItem.innerHTML = `
//         <h4>${goal.name}</h4>
//         <div class="progress-bar">
//           <div class="progress" style="width: ${goal.progress}%;"></div>
//         </div>
//         <p>${goal.progress}% complete, ${goal.timeRemaining} left to reach goal.</p>
//       `;
//       goalsContainer.appendChild(goalItem);
//     });
  
//     const addGoalBtn = document.getElementById('add-goal-btn');
//     addGoalBtn.addEventListener('click', () => {
//       handleUserAction('create-goal');
//     });
//   }
  
//   function updateDebtBalances(debtsData) {
//     const debtsContainer = document.getElementById('debt-balances');
//     debtsContainer.innerHTML = '';
  
//     debtsData.forEach((debt) => {
//       const debtItem = document.createElement('div');
//       debtItem.classList.add('debt-item');
//       debtItem.innerHTML = `
//         <h4>${debt.name}</h4>
//         <p>Balance: $${debt.balance.toLocaleString()}</p>
//         <p>Suggested Monthly Payment: $${debt.suggestedPayment.toLocaleString()}</p>
//         <button>Pay</button>
//       `;
//       debtsContainer.appendChild(debtItem);
//     });
//   }
  
//   function updateFinancialTips(tipsData) {
//     const tipsList = document.getElementById('financial-tips');
//     tipsList.innerHTML = '';
  
//     tipsData.forEach((tip) => {
//       const tipItem = document.createElement('li');
//       tipItem.textContent = tip;
//       tipsList.appendChild(tipItem);
//     });
//   }
  
//   function updateInsightsAlerts(insightsData) {
//     const insightsAlertsContainer = document.getElementById('insights-alerts');
//     insightsAlertsContainer.innerHTML = '';
  
//     insightsData.forEach((insight) => {
//       const insightItem = document.createElement('div');
//       insightItem.classList.add('insight-item');
//       insightItem.innerHTML = `
//         <h4>${insight.title}</h4>
//         <p>${insight.description}</p>
//         ${insight.type === 'alert' ? `
//           <div class="alert-dialog">
//             <button>Dismiss</button>
//           </div>
//         ` : ''}
//       `;
//       insightsAlertsContainer.appendChild(insightItem);
//     });
//   }
  
//   function updateInvestmentPortfolio(investmentsData) {
//     const portfolioContainer = document.getElementById('investment-portfolio');
//     portfolioContainer.innerHTML = '';
  
//     // Use a charting library (e.g., Recharts) to display the investment portfolio
//   }
  
//   function updateExpenseBreakdown(expensesData) {
//     const expenseContainer = document.getElementById('expense-breakdown');
//     expenseContainer.innerHTML = '';
  
//     // Use a charting library (e.g., Recharts) to display the expense breakdown
//   }
  
//   function updateQuickActions() {
//     document.getElementById('add-expense-btn').addEventListener('click', () => {
//       handleUserAction('add-expense');
//     });
  
//     document.getElementById('pay-bill-btn').addEventListener('click', () => {
//       handleUserAction('pay-bill');
//     });
  
//     document.getElementById('create-goal-btn').addEventListener('click', () => {
//       handleUserAction('create-goal');
//     });
  
//     document.getElementById('invest-btn').addEventListener('click', () => {
//       handleUserAction('invest');
//     });
//   }
  
//   function updateEducationalContent(resourcesData) {
//     const educationContainer = document.getElementById('educational-content');
//     educationContainer.innerHTML = '';
  
//     // Display the educational resources (articles, videos, webinars, etc.)
//   }
  
//   function updateCommunitySocialFeed(feedData) {
//     const communityContainer = document.getElementById('community-feed');
//     communityContainer.innerHTML = '';
  
//     // Display the community feed (forums, leaderboards, etc.)
//   }
  
//   function updateNotificationsAlerts(alertsData) {
//     const notificationsContainer = document.getElementById('notifications-alerts');
//     notificationsContainer.innerHTML = '';
  
//     alertsData.forEach((alert) => {
//       const alertItem = document.createElement('div');
//       alertItem.classList.add('notification-item', alert.type);
//       alertItem.innerHTML = `
//         <span class="notification-icon">${getNotificationIcon(alert.type)}</span>
//         <div class="notification-content">
//           <h4>${alert.title}</h4>
//           <p>${alert.message}</p>
//           <small>${alert.timestamp}</small>
//         </div>
//         <button class="dismiss-btn">Dismiss</button>
//       `;
//       notificationsContainer.appendChild(alertItem);
//     });
  
//     // Add event listeners to dismiss buttons
//     const dismissButtons = notificationsContainer.querySelectorAll('.dismiss-btn');
//     dismissButtons.forEach(button => {
//       button.addEventListener('click', (e) => {
//         e.target.closest('.notification-item').remove();
//       });
//     });
//   }
  
//   function getNotificationIcon(type) {
//     const icons = {
//       'info': '🔔',
//       'warning': '⚠️',
//       'error': '❌',
//       'success': '✅'
//     };
//     return icons[type] || '📢';
//   }
  
//   function updateFinancialCalculators() {
//     // Loan Calculator
//     const loanCalculatorBtn = document.getElementById('loan-calculator-btn');
//     loanCalculatorBtn.addEventListener('click', () => {
//       const principal = parseFloat(document.getElementById('loan-amount').value);
//       const interestRate = parseFloat(document.getElementById('interest-rate').value);
//       const loanTerm = parseFloat(document.getElementById('loan-term').value);
  
//       const monthlyPayment = calculateMonthlyLoanPayment(principal, interestRate, loanTerm);
//       document.getElementById('loan-result').textContent = `Monthly Payment: $${monthlyPayment.toLocaleString()}`;
//     });
  
//     // Compound Interest Calculator
//     const compoundInterestBtn = document.getElementById('compound-interest-btn');
//     compoundInterestBtn.addEventListener('click', () => {
//       const principal = parseFloat(document.getElementById('initial-investment').value);
//       const annualRate = parseFloat(document.getElementById('annual-rate').value);
//       const years = parseFloat(document.getElementById('investment-years').value);
//       const compoundFrequency = document.getElementById('compound-frequency').value;
  
//       const futureValue = calculateCompoundInterest(principal, annualRate, years, compoundFrequency);
//       document.getElementById('compound-interest-result').textContent = `Future Value: $${futureValue.toLocaleString()}`;
//     });
//   }
  
//   function calculateMonthlyLoanPayment(principal, annualInterestRate, loanTermYears) {
//     const monthlyInterestRate = annualInterestRate / 100 / 12;
//     const numberOfPayments = loanTermYears * 12;
  
//     const monthlyPayment = principal * 
//       (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
//       (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  
//     return Math.round(monthlyPayment * 100) / 100;
//   }
  
//   function calculateCompoundInterest(principal, annualRate, years, compoundFrequency) {
//     const compoundFrequencyMap = {
//       'annually': 1,
//       'semiannually': 2,
//       'quarterly': 4,
//       'monthly': 12,
//       'daily': 365
//     };
  
//     const n = compoundFrequencyMap[compoundFrequency];
//     const rate = annualRate / 100;
  
//     const futureValue = principal * Math.pow(1 + (rate / n), n * years);
//     return Math.round(futureValue * 100) / 100;
//   }
  
//   function updateUserProfileSettings(userProfile, userSettings) {
//     // Update user profile information
//     document.getElementById('profile-name').textContent = userProfile.fullName;
//     document.getElementById('profile-email').textContent = userProfile.email;
//     document.getElementById('profile-avatar').src = userProfile.avatarUrl;
  
//     // Populate user settings form
//     document.getElementById('notification-preferences').checked = userSettings.emailNotifications;
//     document.getElementById('dark-mode-toggle').checked = userSettings.darkMode;
    
//     // Add event listeners for settings changes
//     document.getElementById('notification-preferences').addEventListener('change', (e) => {
//       handleUserAction('update-notifications', e.target.checked);
//     });
  
//     document.getElementById('dark-mode-toggle').addEventListener('change', (e) => {
//       handleUserAction('toggle-dark-mode', e.target.checked);
//     });
//   }
  
//   function updateChatbotSupport() {
//     const chatbotContainer = document.getElementById('chatbot-support');
//     const chatInput = document.getElementById('chat-input');
//     const sendButton = document.getElementById('send-chat-btn');
//     const chatMessages = document.getElementById('chat-messages');
  
//     sendButton.addEventListener('click', () => {
//       const message = chatInput.value.trim();
//       if (message) {
//         // Add user message to chat
//         const userMessageEl = document.createElement('div');
//         userMessageEl.classList.add('chat-message', 'user-message');
//         userMessageEl.textContent = message;
//         chatMessages.appendChild(userMessageEl);
  
//         // Simulate chatbot response (in a real app, this would be an API call)
//         setTimeout(() => {
//           const botMessageEl = document.createElement('div');
//           botMessageEl.classList.add('chat-message', 'bot-message');
//           botMessageEl.textContent = `I heard: ${message}. How can I help you today?`;
//           chatMessages.appendChild(botMessageEl);
  
//           // Scroll to bottom of chat
//           chatMessages.scrollTop = chatMessages.scrollHeight;
//         }, 1000);
  
//         // Clear input
//         chatInput.value = '';
//       }
//     });
//   }
  
//   function updateLifeEventSimulator() {
//     const lifeEventSimulatorBtn = document.getElementById('life-event-simulator-btn');
//     lifeEventSimulatorBtn.addEventListener('click', () => {
//       const lifeEvent = document.getElementById('life-event-select').value;
//       const financialImpact = simulateLifeEventImpact(lifeEvent);
  
//       const resultContainer = document.getElementById('life-event-result');
//       resultContainer.innerHTML = `
//         <h3>Impact of ${lifeEvent}</h3>
//         <p>Estimated Financial Impact: $${financialImpact.toLocaleString()}</p>
//         <p>Recommended Actions: ${getRecommendedActions(lifeEvent)}</p>
//       `;
//     });
//   }
  
//   function simulateLifeEventImpact(lifeEvent) {
//     // Simplified financial impact simulation
//     const impactValues = {
//       'marriage': 15000,
//       'having-child': 50000,
//       'buying-house': 75000,
//       'career-change': 25000,
//       'retirement': -30000
//     };
  
//     return impactValues[lifeEvent] || 0;
//   }
  
//   function getRecommendedActions(lifeEvent) {
//     const recommendations = {
//       'marriage': 'Update joint financial plans, review insurance, and consolidate accounts',
//       'having-child': 'Start college savings plan, review life insurance, update budget',
//       'buying-house': 'Save for down payment, check credit score, budget for maintenance',
//       'career-change': 'Build emergency fund, update insurance, reassess retirement contributions',
//       'retirement': 'Maximize retirement accounts, adjust investment strategy, plan healthcare costs'
//     };
  
//     return recommendations[lifeEvent] || 'Consult with a financial advisor for personalized guidance';
//   }
  
//   function handleUserAction(action, data = null) {
//     // Central handler for user interactions
//     switch(action) {
//       case 'add-expense':
//         // Logic to add new expense
//         console.log('Adding new expense');
//         break;
//       case 'pay-bill':
//         // Logic to pay a bill
//         console.log('Paying bill');
//         break;
//       case 'create-goal':
//         // Logic to create a new savings goal
//         console.log('Creating new savings goal');
//         break;
//       case 'invest':
//         // Logic to start investment process
//         console.log('Initiating investment');
//         break;
//       case 'update-notifications':
//         console.log('Updating notification preferences:', data);
//         break;
//       case 'toggle-dark-mode':
//         document.body.classList.toggle('dark-mode', data);
//         break;
//       default:
//         console.log('Unhandled user action:', action);
//     }
//   }
  
//   // Initial setup when page loads
//   document.addEventListener('DOMContentLoaded', () => {
//     fetchUserData();
//   });




  // Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
  });

  // Notification Toggle
  const notificationButton = document.querySelector('.nav-icons .icon-button:nth-child(1)');
  const notificationPanel = document.getElementById('notification-panel');

  notificationButton.addEventListener('click', () => {
      notificationPanel.classList.toggle('active');
  });

  // Profile Button Toggle
  const profileButton = document.querySelector('.nav-icons .icon-button:nth-child(2)');
  const profileMenu = document.getElementById('profile-menu');

  profileButton.addEventListener('click', () => {
      profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close dropdowns and notifications when clicking outside
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.notification-panel') && 
          !e.target.closest('.nav-icons .icon-button:nth-child(1)')) {
          notificationPanel.classList.remove('active');
      }

      if (!e.target.closest('.nav-icons .icon-button:nth-child(2)') && 
          !e.target.closest('#profile-menu')) {
          profileMenu.style.display = 'none';
      }

      if (!e.target.closest('#menu-toggle') && !e.target.closest('#mobile-menu')) {
          mobileMenu.classList.remove('active');
      }
  });

  // Handle Logout functionality
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
          alert('You have been logged out successfully.');
          window.location.href = '/login.html';
      });
  }