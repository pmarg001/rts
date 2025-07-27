import { ChildAsFC } from './Child';

const Parent = () => {
    return (
        <ChildAsFC color='red' onClick={() => {console.log('Button was clicked')}}>
            This is a test
        </ChildAsFC>
    );
};

export default Parent;
