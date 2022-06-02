import {ScaleLoader} from 'react-spinners'

export interface ISpinnerProps {
}

export function Spinner (props: ISpinnerProps) {
  return (
    <div>
      <ScaleLoader color='green' />
    </div>
  );
}
