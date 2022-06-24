import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apolle';
import { Router } from './Router';

export function App() {
    return (
        <>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ApolloProvider>
        </>
    )
}



















// GraphCMS como funciona:

// CMS - Content Management System
// Traz o painel de ADMIN tanto quanto a parte visual do frontend Ex: wordpress

// Headless CMS  (GraphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL)
// React que consome API do CMS (ou qualquer outra ferramenta)

// query / mutation

// query = buscar dados
// mutation = criar, alterar ou deletar dados