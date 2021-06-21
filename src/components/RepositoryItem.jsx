import React from 'react';

export function RepositoryItem(props) {
    return (
        <li>
            <strong> {props.repository?.full_name ?? 'Default'} </strong>
            <p> {props.repository?.description} </p>

            <a href={props.repository?.html_url}> Acessar Repo</a>
        </li>
    )

}