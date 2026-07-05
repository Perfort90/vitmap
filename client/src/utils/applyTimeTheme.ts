export function applyTimeTheme() {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    document.documentElement.dataset.theme = 'morning';
    return;
  }

  if (hour >= 12 && hour < 18) {
    document.documentElement.dataset.theme = 'day';
    return;
  }

  if (hour >= 18 && hour < 22) {
    document.documentElement.dataset.theme = 'evening';
    return;
  }

  document.documentElement.dataset.theme = 'night';
}