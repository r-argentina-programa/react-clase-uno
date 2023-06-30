import { Button } from './Button.js';

export function LikeButton(props) {
  const [meGusta, setMeGusta] = React.useState(false);

  return (
    <Button
      onClick={() => setMeGusta(!meGusta)}
      className={meGusta ? 'button-blue' : 'button-white'}
    >
      {meGusta ? 'Le diste me gusta!' : 'Dale me gusta'}
    </Button>
  );
}
