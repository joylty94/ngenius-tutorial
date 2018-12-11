import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';
import { Accordion, Icon } from 'semantic-ui-react';

export default class MenuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex : null,
        };
    }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render() {
        const { activeIndex } = this.state
        return (
            <MenuContainer>
                <h1>이지월페어 병원 광고관리</h1>
                <Accordion>
                    <Accordion.Title index={0} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        미등록병원
                    </Accordion.Title>
                    <Accordion.Content>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        병원관리
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <ItemDiv>전체</ItemDiv>
                        <ItemDiv>성형수술/시술</ItemDiv>
                        <ItemDiv>피부/레이저</ItemDiv>
                        <ItemDiv>탈모/두피케어</ItemDiv>
                        <ItemDiv>안과/라식</ItemDiv>
                        <ItemDiv>체형관리</ItemDiv>
                        <ItemDiv>치과/임플란트</ItemDiv>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        상품리스트
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <ItemDiv>전체</ItemDiv>
                        <ItemDiv>라인베스트</ItemDiv>
                        <ItemDiv>카테고리 일반</ItemDiv>
                        <ItemDiv>메인 이벤트</ItemDiv>
                        <ItemDiv>이벤트</ItemDiv>
                        <ItemDiv>카테고리 베스트</ItemDiv>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        병원 예약상담
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <ItemDiv>전체</ItemDiv>
                        <ItemDiv>라인베스트</ItemDiv>
                        <ItemDiv>카테고리 일반</ItemDiv>
                        <ItemDiv>메인 이벤트</ItemDiv>
                        <ItemDiv>이벤트</ItemDiv>
                        <ItemDiv>카테고리 베스트</ItemDiv>
                        <ItemDiv>* 삭제상품</ItemDiv>
                    </Accordion.Content>
                </Accordion>
            </MenuContainer>
        );
    }
}

const MenuContainer = styled.div`
    background-color: #33414e;
    color: #fff;
    height: 1050px;
    width:230px;
`

const ItemDiv = styled.div`
    background-color: #23303b;
    padding: 8px;
    font-size: 12px;
    font-weight: 300;
    border-bottom: 1px solid #2f3c48;
`