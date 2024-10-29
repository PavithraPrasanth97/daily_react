import React, {forwardRef} from 'react'

const TaskModal = forwardRef(({children},ref) => {
  return (
    <dialog ref={ref}>
        {children}
    </dialog>
);
  
});

export default TaskModal