/*
 * Copyright (c) 2002-2021 "Neo4j,"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import ManualLink from 'browser-components/ManualLink'
import AdminOnSystemDb from './partials/admin-on-systemdb'
const title = 'CREATE ROLE'
const subtitle = 'Create a new role'
const category = 'security'
const content = (
  <>
    <p>
      The <code>CREATE ROLE</code> command can be used to create roles.
    </p>
    <div className="links">
      <div className="link">
        <p className="title">Reference</p>
        <p className="content">
          <ManualLink
            chapter="cypher-manual"
            page="/administration/security/users-and-roles/#administration-security-roles-create"
            minVersion="4.0.0"
          >
            CREATE ROLE
          </ManualLink>{' '}
          manual page
        </p>
      </div>
      <div className="link">
        <p className="title">Related</p>
        <p className="content">
          <a help-topic="show-roles">:help SHOW ROLES</a>{' '}
          <a help-topic="drop-role">:help DROP ROLE</a>{' '}
          <a help-topic="grant-role">:help GRANT ROLE</a>{' '}
          <a help-topic="revoke-role">:help REVOKE ROLE</a>{' '}
          <a help-topic="cypher">:help Cypher</a>
        </p>
      </div>
    </div>
    <section className="example">
      <figure>
        <pre className="code runnable standalone-example">
          CREATE ROLE myrole
        </pre>
      </figure>
      <figure>
        <pre className="code runnable standalone-example">
          CREATE ROLE mysecondrole AS COPY OF myrole
        </pre>
        <figcaption>
          A role can also be copied, keeping its privileges.
        </figcaption>
      </figure>
    </section>
    <AdminOnSystemDb />
  </>
)
export default { title, subtitle, category, content }