export const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, callback: () => void) => {
  if (event.key === 'Enter') {
    callback();
  }
};
