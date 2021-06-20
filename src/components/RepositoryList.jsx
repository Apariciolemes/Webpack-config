import React from 'react';
import { RepositoryItem } from './RepositoryItem';

const repository = {
    title: 'Repository -  Item',
    description: 'Forms in React',
    link: 'https://github.com/Apariciolemes/Webpack-config',
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}