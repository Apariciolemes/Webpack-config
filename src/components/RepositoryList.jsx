import React from 'react';
import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../style/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    title: 'Repository -  Item',
    description: 'Forms in React',
    link: 'https://github.com/Apariciolemes/Webpack-config',
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos").then(resp => resp.json()).then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
            </ul>
        </section>
    )
}