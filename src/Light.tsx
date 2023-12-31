import { FC } from 'react';

type LightProps = {
  /** Some description */
  variant: 'green' | 'yellow' | 'red';
};

/** Some comment about my Light component */
const Light: FC<LightProps> = ({variant = 'green'} : LightProps) => {
  return (
    <>
        <div style={{
            background: variant,
            borderRadius: '50%',
            width: 50,
            height: 50,
        }}>
        </div>
    </>
  )
}

export default Light;