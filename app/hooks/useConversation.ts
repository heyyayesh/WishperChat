import { useParams } from 'next/navigation';
import { useMemo } from 'react';

const useConversation = () => {
  const params = useParams();

  const converSationId = useMemo(() => {
    if (!params?.converSationId) {
      return '';
    }

    return params.converSationId as string;
  }, [params?.converSationId]);

  const isOpen = useMemo(() => !!converSationId, [converSationId]);

  return useMemo(
    () => ({
      isOpen,
      converSationId,
    }),
    [isOpen, converSationId]
  );
};

export default useConversation;
