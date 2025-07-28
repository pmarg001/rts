
const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("I am being dragged")
    }

    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>
                drag me
            </div>
        </div>
    );
};

export default EventComponent;
