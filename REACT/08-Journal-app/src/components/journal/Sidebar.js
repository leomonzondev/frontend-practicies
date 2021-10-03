import React from 'react'
import { JournalEntries } from './JournalEntries'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Leonardo!</span>
                </h3>

                <button className="btn">
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">

                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New Entry
                </p>
            </div>

        <Link
            to="/sandbox/fire"
            className="link btn"
        >
            SandBox
        </Link>

            <JournalEntries />
        </aside>
    )
}
