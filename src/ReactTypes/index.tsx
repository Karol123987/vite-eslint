import { FunctionComponent } from 'react';
import { ReactUseStateExampleComponent } from '../ReactUseStateExample';

const style: React.CSSProperties = {
  color: 'red',
  fontSize: 14,
};

interface ChildrenProps {
  children: React.ReactNode;
}

// Children Types example
const ChildrenComponent = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

// const ChildrenComponent = ({ children }: {children: React.ReactNode}}) => {
//   return <div>{children}</div>;
// };

export const ReactTypes: FunctionComponent = () => {
  // export function ReactTypes(): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('kliknięto przycisk', event);
  };

  return (
    <div style={style}>
      {/* EVENT DLA INPUTA */}
      <input type="text" onChange={handleChange} />

      <button onClick={handleClick} />

      <ChildrenComponent>
        <div>children</div>
        <div>children</div>
      </ChildrenComponent>
      <ReactUseStateExampleComponent />
    </div>
  );
};

// styled-components
// https://styled-components.com/
