import { Button, Form, Input, InputNumber, Col, Row, Select } from 'antd'

const { Option } = Select

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
}
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
}
/* eslint-enable no-template-curly-in-string */

export default function ProjectForm() {
    const onFinish = (values) => {
        console.log(values)
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`)
    }

    return (
        <>
            <Row justify="center" align="middle">
                <Col>
                    <h1 style={{ marginBottom: 20 }}>My First Ant Form</h1>
                </Col>
            </Row>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={['project', 'name']}
                    label="Project Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['project', 'budget']}
                    label="Budget"
                    rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 1000000,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['project', 'category']} label="Category">
                    <Select
                        defaultValue="default"
                        style={{
                            width: 300,
                        }}
                        onChange={handleChange}
                    >
                        <Option value="default" disabled>
                            Select one Category
                        </Option>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>

                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
