function showForm(formType) {
  document.getElementById('welcomeScreen').classList.add('hidden');
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('loginForm').classList.add('hidden');

  if (formType === 'signup') {
    document.getElementById('signupForm').classList.remove('hidden');
  } else if (formType === 'login') {
    document.getElementById('loginForm').classList.remove('hidden');
  } else {
    document.getElementById('welcomeScreen').classList.remove('hidden');
  }
}
