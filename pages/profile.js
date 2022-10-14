import { useSession } from "next-auth/react";

import profileStyles from '../styles/Profile.module.css'

function Profile() {
  const { data: session } = useSession()
  return (
    <>
      <div className={profileStyles.container}>
        <h1>Profile</h1>
        { session ? (
          <div className={profileStyles.section}>
            <div className={profileStyles.profilegrp}>
              <div>Name</div>
              <div>{session.user.name}</div>
            </div>
            <div className={profileStyles.profilegrp}>
              <div>Email</div>
              <div>{session.user.email}</div>
            </div>
          </div>
        ) : (
          <h3>Pls sign in first</h3>
        )}
      </div>
    </>
  )
}

export default Profile