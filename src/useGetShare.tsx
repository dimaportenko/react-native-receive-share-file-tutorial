import ReceiveSharingIntent from 'react-native-receive-sharing-intent';
import {useEffect, useState} from 'react';

export type ShareFile = {
  filePath?: string;
  text?: string;
  weblink?: string;
  mimeType?: string;
  contentUri?: string;
  fileName?: string;
  extension?: string;
};

export const useGetShare = () => {
  const [share, setShare] = useState<ShareFile[] | undefined>(undefined);

  useEffect(() => {
    // To get All Recived Urls
    ReceiveSharingIntent.getReceivedFiles(
      (files: ShareFile[]) => {
        // files returns as JSON Array example
        //[{ filePath: null, text: null, weblink: null, mimeType: null, contentUri: null, fileName: null, extension: null }]
        console.log('Received Files', files);
        setShare(files);
      },
      // @ts-ignore
      error => {
        console.log(error);
      },
      'ShareMedia', // share url protocol (must be unique to your app, suggest using your apple bundle id)
    );
  }, []);

  return share;
};
