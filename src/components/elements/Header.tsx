import { Center, Text, Heading } from '../../libraries/chakra';

export const Header = () => (
    <Center flexDirection="column" h="150px" bg="green.500" color="white">
        <Heading size="lg">Prueba de PagueloFacil</Heading>
        <Text as="strong">
            Autor:{' '}
            <a href="https://www.linkedin.com/in/carlos-pe%C3%B1alba-70a036114/" target="_blank">
                Carlos Peñalba
            </a>
        </Text>
        <Text as="strong">
            <a href="https://github.com/javiier507/PagueloFacil-Test" target="_blank">
                Código Fuente
            </a>
        </Text>
    </Center>
);
