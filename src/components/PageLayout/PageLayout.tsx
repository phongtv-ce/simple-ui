import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import PageFooter from 'components/PageFooter/PageFooter';
import PageHeader from 'components/PageHeader/PageHeader';

import 'react-toastify/dist/ReactToastify.css';
import { notificationActions } from 'redux/notifications/slice';

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.notification);

  useEffect(() => {
    if (notification.type === 'error' && notification.message !== '') {
      toast.error(notification.message, {
        onClose: () => dispatch(notificationActions.clearNotification()),
      });
    }
  }, [notification]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container-md">
        <PageHeader />
        <article>{props.children}</article>
        <PageFooter />
      </div>
    </>
  );
};

export default PageLayout;
