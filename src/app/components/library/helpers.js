// if current URL matches path, return active class
const active = (path) => {
  if (location.pathname === path) {
    return 'active';
  }
};

module.exports = {
  active: active
};