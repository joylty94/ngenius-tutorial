import React, { Component } from 'react';
import { Grommet } from 'grommet';
import { TextInput, Button } from 'grommet';
import styled from 'styled-components'

export default class LoginComponent extends Component {
    render() {
        return (
            <Container>
                <FormContainer>
                    <h2 style={{ marginBottom: '15px' }}>
                        로그인 이지웰(Ezwel)
                    </h2>
                    <div style={{ marginBottom: '10px' }}>
                        <TextInput
                            placeholder="ID"
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <TextInput
                            placeholder="PW"
                        />
                    </div>
                    <Button label='로그인' onClick={() => { }} fill={true}
                        color="#000" />
                </FormContainer>
                <FlexDiv>
                    <div>2018 기술자</div>
                    <div>ngenius.co.kr</div>
                </FlexDiv>
            </Container>
        );
    }
}

const Container = styled.div`
    width: 400px;
    margin: auto;
    padding-top: 100px;
`

const FormContainer = styled.div`
    width: 100%;
    border-radius: 3px;
    border: 1px solid #000;
    padding: 20px;
    border-radius: 5px;
`

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const itemDiv = styled.div`

`