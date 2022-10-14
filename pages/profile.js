import { useSession, signIn, signOut } from "next-auth/react";

import profileStyles from '../styles/Profile.module.css'

function Profile() {
  const { data: session } = useSession()
  return (
    <>
      <div className={profileStyles.container}>
        <div className={profileStyles.title}>Profile</div>
          <div className={profileStyles.profilegrp}>
            <div className={profileStyles.category}>Name</div>
            <div className={profileStyles.value}>{session.user.name}</div>
          </div>
          <div className={profileStyles.profilegrp}>
            <div className={profileStyles.category}>Email</div>
            <div className={profileStyles.value}>{session.user.email}</div>
          </div>
      </div>
    </>
  )
}

export default Profile