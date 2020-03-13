import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Step, Icon, Button, Input, Radio, TextArea, Label, Form, Dropdown, Segment } from 'semantic-ui-react'
import {
    handleMenuHeaderItem
} from '../../components/action';


class TravelCreate extends Component {
    render() {
        const countryOptions = [
            { key: 'Keelung', value: 'Keelung', text: '基隆市' },
            { key: 'Taipei', value: 'Taipei', text: '台北市' },
            { key: 'New Taipei', value: 'New Taipei', text: '新北市' },
            { key: 'Taoyuan', value: 'Taoyuan', text: '桃園市' },
            { key: 'Hsinchu City', value: 'Hsinchu City', text: '新竹市' },
            { key: 'Hsinchu Country', value: 'Hsinchu Country', text: '新竹縣' },
            { key: 'Miaoli', value: 'Miaoli', text: '苗栗縣' },
            { key: 'Yunlin', value: 'Yunlin', text: '雲林縣' },
            { key: 'Chiayi', value: 'Chiayi', text: '嘉義市' },
            { key: 'Nantou', value: 'Nantou', text: '南投縣' },
            { key: 'Taichung', value: 'Taichung', text: '台中市' },
            { key: 'Changhua', value: 'Changhua', text: '彰化縣' },
            { key: 'Kaohsiung', value: 'Kaohsiung', text: '高雄市' },
            { key: 'Pingtung', value: 'Pingtung', text: '屏東縣' },
            { key: 'Yilan', value: 'Yilan', text: '宜蘭縣' },
            { key: 'Hualien', value: 'Hualien', text: '花蓮縣' },
            { key: 'Taitung', value: 'Taitung', text: '台東縣' },
            { key: 'Penghu', value: 'Penghu', text: '澎湖縣' },
            { key: 'Tainan', value: 'Tainan', text: '台南市' },
            { key: 'Kinmen', value: 'Kinmen', text: '金門縣' },
            { key: 'Lienchiang', value: 'Lienchiang', text: '連江縣' },
        ]


        const typeOptions = [
            { key: 'Food', value: 'Food', text: '食' },
            { key: 'Clothing ', value: 'Clothing ', text: '衣' },
            { key: 'Accommodation', value: 'Accommodation', text: '住' },
            { key: 'Transportation ', value: 'Transportation ', text: '行' },
            { key: 'Education', value: 'Food', text: '育' },
            { key: 'Recreation ', value: 'Recreation ', text: '樂' }
        ]


        const tableData = [
            { name: 'John', age: 15, gender: 'Male' },
            { name: 'Amber', age: 40, gender: 'Female' },
            { name: 'Leslie', age: 25, gender: 'Other' },
            { name: 'Ben', age: 70, gender: 'Male' },
        ]

        return (



            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}></Grid.Column>
                    <Grid.Column width={10}>
                        <Step.Group attached='top'>
                            <Step>
                                <Icon name='calendar alternate' />
                                <Step.Content>
                                    <Step.Title>Date</Step.Title>
                                    <Step.Description>Choose your travel range</Step.Description>
                                </Step.Content>
                            </Step>

                            <Step active>
                                <Icon name='edit' />
                                <Step.Content>
                                    <Step.Title>行程內容</Step.Title>
                                    <Step.Description>Enter billing information</Step.Description>
                                </Step.Content>
                            </Step>
                        </Step.Group>
                        <Segment >
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Input
                                            label={{ basic: true, content: '旅行名稱' }}
                                            labelPosition='left'
                                            placeholder='Enter weight...'
                                            fluid />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Input
                                            label={{ basic: true, content: '出發時間' }}
                                            labelPosition='left'
                                            placeholder='Enter weight...'
                                            fluid
                                            type='datetime-local' />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Input
                                            label={{ basic: true, content: '返家日' }}
                                            labelPosition='left'
                                            placeholder='Enter weight...'
                                            fluid
                                            type='date' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Input
                                            label={{ basic: true, content: '出發地' }}
                                            labelPosition='left'
                                            placeholder='Enter weight...'
                                            fluid />
                                    </Grid.Column>
                                    <Grid.Column width={8} textAlign='right'>
                                        <Button basic color='green' >保存</Button>
                                        <Button basic color='blue'><Icon name='add'/>新增行程</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                        <Segment >
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <Dropdown
                                            placeholder='Day幾天'
                                            fluid
                                            search
                                            selection
                                            options={typeOptions}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={4} textAlign='right'>
                                        <Button basic color='orange' icon='quidditch' title='清空'/>
                                        <Button basic color='red' icon='trash alternate' title='刪除' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Input
                                            label={{ basic: true, content: '行程名稱' }}
                                            labelPosition='left'
                                            placeholder='Enter weight...'
                                            fluid />
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Dropdown
                                            placeholder='請選擇縣市'
                                            fluid
                                            search
                                            selection
                                            options={countryOptions}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Dropdown
                                            placeholder='請選擇分類'
                                            fluid
                                            search
                                            selection
                                            options={typeOptions}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Input
                                            label={{ basic: true, content: '地址' }}
                                            labelPosition='left'
                                            placeholder='Enter weight...'
                                            fluid />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Input
                                            label={{ basic: true, content: '停留時間' }}
                                            labelPosition='left'
                                            placeholder='Enter weight...'
                                            fluid />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Input
                                            label={{ basic: true, content: '日期' }}
                                            labelPosition='left'
                                            placeholder='Enter weight...'
                                            type='datetime-local'
                                            fluid />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <Segment compact textAlign='left' style={{ width: '100%' }}   >
                                            門票
                                        <p></p>
                                            <Radio
                                                label='需要'
                                                name='ticket'
                                                value='yes'
                                            // checked={this.state.value === 'this'}
                                            // onChange={this.handleChange}
                                            />
                                            <p></p>
                                            <Radio
                                                label='免費'
                                                name='ticket'
                                                value='that'
                                            // checked={this.state.value === 'that'}
                                            // onChange={this.handleChange}
                                            />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Segment compact textAlign='left' style={{ width: '100%' }}   >
                                            附近餐廳
                                        <p></p>
                                            <Radio
                                                label='有'
                                                name='ticket'
                                                value='yes'
                                            // checked={this.state.value === 'this'}
                                            // onChange={this.handleChange}
                                            />
                                            <p></p>
                                            <Radio
                                                label='沒有'
                                                name='ticket'
                                                value='that'
                                            // checked={this.state.value === 'that'}
                                            // onChange={this.handleChange}
                                            />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Segment compact textAlign='left' style={{ width: '100%' }}   >
                                            停車位
                                        <p></p>
                                            <Radio
                                                label='有'
                                                name='ticket'
                                                value='yes'
                                            // checked={this.state.value === 'this'}
                                            // onChange={this.handleChange}
                                            />
                                            <p></p>
                                            <Radio
                                                label='沒有'
                                                name='ticket'
                                                value='that'
                                            // checked={this.state.value === 'that'}
                                            // onChange={this.handleChange}
                                            />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Segment compact textAlign='left' style={{ width: '100%' }}   >
                                            攜帶寵物
                                        <p></p>
                                            <Radio
                                                label='可以'
                                                name='ticket'
                                                value='yes'
                                            // checked={this.state.value === 'this'}
                                            // onChange={this.handleChange}
                                            />
                                            <p></p>
                                            <Radio
                                                label='禁止'
                                                name='ticket'
                                                value='that'
                                            // checked={this.state.value === 'that'}
                                            // onChange={this.handleChange}
                                            />
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Segment compact textAlign='left' style={{ width: '100%' }}   >
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column width={6} textAlign='center'>
                                                        項目
                                                        </Grid.Column>
                                                    <Grid.Column width={3} textAlign='center' >
                                                        數量
                                                    </Grid.Column>
                                                    <Grid.Column width={3} textAlign='center'>
                                                        單價
                                                    </Grid.Column>
                                                    <Grid.Column width={4} textAlign='center'>
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={6}>
                                                        <Input
                                                            placeholder='Enter weight...'
                                                            fluid
                                                        />
                                                    </Grid.Column>
                                                    <Grid.Column width={3}>
                                                        <Input
                                                            placeholder='Enter weight...'
                                                            fluid
                                                        />
                                                    </Grid.Column>
                                                    <Grid.Column width={3}>
                                                        <Input
                                                            placeholder='Enter weight...'
                                                            fluid
                                                        />
                                                    </Grid.Column>
                                                    <Grid.Column width={4} textAlign='center'>
                                                        <Button circular icon='trash' color='red' title='Delete' />
                                                        <Button circular icon='add' color='blue' title='Add' />
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Segment compact textAlign='left' style={{ width: '100%' }}   >
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column width={16}>
                                                        <Label color='red' tag>
                                                            旅遊手札
                                                        </Label>
                                                        <p></p>
                                                        <Form>
                                                            <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
                                                        </Form>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column width={16} textAlign='right'>
                                        <Button basic color='green'>保存</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuItem: state.handleMenuHeaderItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMenuItem: (val) => {
            dispatch(handleMenuHeaderItem(val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelCreate)