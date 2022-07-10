import React, {useEffect, useState} from 'react';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

export type ShareFile = {
  filePath?: string;
  text?: string;
  weblink?: string;
  mimeType?: string;
  contentUri?: string;
  fileName?: string;
  extension?: string;
};

export const useGetShare = () =>{
  const [files, setFiles] = useState(undefined);
  useEffect(() => {
    // To get All Recived Urls
    ReceiveSharingIntent.getReceivedFiles(
      files => {
        setFiles(files);
      },
      error => {
        console.log(error);
      },
      'dimaportenko', // share url protocol (must be unique to your app, suggest using your apple bundle id)
    );
  }, []);

  return files;
}
