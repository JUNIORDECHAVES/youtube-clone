import React, { useState } from 'react';
import { Container, CategoryList, CategoryItem, ButtonScroll, ScrollContainer, ContainerFilterCategory } from './StyledComponents';
import { MdOutlineArrowBackIos } from 'react-icons/md';

interface FiltroCategoriaProps {
    categories: string[];
}

const FiltroCategoria = ({ categories }:FiltroCategoriaProps) => {
    

    return (
        <Container>
            <ContainerFilterCategory>

                <ScrollContainer>
                    <ButtonScroll><MdOutlineArrowBackIos /></ButtonScroll>
                </ScrollContainer>

                <CategoryList>
                    {categories.map((item) => (
                        <CategoryItem isActive key={item}
                        >{item}</CategoryItem>
                    ))}
                </CategoryList>
            </ContainerFilterCategory>
        </Container>
    );
};

export default FiltroCategoria;
