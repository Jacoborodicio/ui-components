import {WorkflowHeaderContainer, WorkflowHeaderItem} from "./WorkflowHeaderStyles";

const WorkflowHeader = ({steps}) => {
    return <WorkflowHeaderContainer>
        {steps.map(step => (
            <WorkflowHeaderItem key={step.id}>
                <div><h3>{step.name}</h3></div>
            </WorkflowHeaderItem>
        ))}
    </WorkflowHeaderContainer>
}

export default WorkflowHeader;