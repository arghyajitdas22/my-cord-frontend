import { create } from "zustand";
import socketio from "socket.io-client";

interface ISocketStore {
  socket: ReturnType<typeof socketio> | null;
  initializeSocket: () => void;
  disconnectSocket: () => void;
}

export const useSocket = create<ISocketStore>()((set) => ({
  socket: null,
  initializeSocket: () => {
    const socket = socketio(import.meta.env.VITE_SOCKET_URL, {
      withCredentials: true,
      auth: { accessToken: localStorage.getItem("accessToken") },
    });
    set({ socket });
  },
  disconnectSocket: () => {
    set((state) => {
      state.socket?.disconnect();
      return { socket: null };
    });
  },
}));
