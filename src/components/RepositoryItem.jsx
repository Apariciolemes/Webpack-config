import React from 'react';

export function RepositoryItem(props) {
    return (
        <li>
            <strong> {props.repository?.title ?? 'Default'} </strong>
            <p> {props.repository?.description ?? 'Default'} </p>

            <a href={props.repository?.link ?? 'Default'}> Acessar Repo</a>
        </li>
    )

}