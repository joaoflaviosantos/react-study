import { Divider, Steps } from 'antd'
const { Step } = Steps

export default function AntDesignSteps() {
    return (
        <>
            <Divider />
            <Steps progressDot current={1} style={{ paddingBottom: '40px' }}>
                <Step title="Finished" description="This is a description." />
                <Step
                    title="In Progress"
                    description="This is a description."
                />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </>
    )
}
