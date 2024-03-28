import React, {useState, useEffect} from 'react';
import './App.css';

import {withAuthenticator, useAuthenticator, Button} from "@aws-amplify/ui-react";
import { remove } from 'aws-amplify/storage';
import {StorageManager} from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
//import {Storage} from "aws-amplify"

function App() {
  const {signOut} = useAuthenticator((context)=>[context.signOut])
  return <>
  <StorageManager
  accessLevel="private"
  acceptedFileTypes={['image/*']}
  maxFileCount={1}
  />
  <Button onClick={signOut}>Sign Out</Button>
  </>
}

export default withAuthenticator(App);
