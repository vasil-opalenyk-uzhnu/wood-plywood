const range = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

export function getPageRange(page, total, siblings) {
  const maxVisible = siblings * 2 + 5;

  if (total <= maxVisible) return range(1, total);

  const left = Math.max(page - siblings, 1);
  const right = Math.min(page + siblings, total);

  const showStartDots = left > 2;
  const showEndDots = right < total - 1;
  const edgeCount = 3 + siblings * 2;

  if (!showStartDots && showEndDots) {
    return [...range(1, edgeCount), 'dots-end', total];
  }

  if (showStartDots && !showEndDots) {
    return [1, 'dots-start', ...range(total - edgeCount + 1, total)];
  }

  return [1, 'dots-start', ...range(left, right), 'dots-end', total];
}
