import { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

type Profile = {
  firstname: string;
  lastname: string;
  profession: string;
  profilePhoto: string;
  memoji: string;
};

type Categories = {
  id: number;
  name: string;
  img: string;
  shortDescription: string;
  description: string;
};

type ImageArtistic ={
  id: number;
  name:string;
  link:string;
  shortDescription: string;
  description: string;
  cameraLink: string;
  softwareLink: string;
  latitude: string;
  longitude:string;
  date:string;
}

type ImageBoudoirTexture ={
  id: number;
  name:string;
  link:string;
  shortDescription: string;
  description: string;
  cameraLink: string;
  softwareLink: string;
  latitude: string;
  longitude:string;
  date:string;
}

type ImageBoudoir ={
  id: number;
  name:string;
  link:string;
  shortDescription: string;
  description: string;
  cameraLink: string;
  softwareLink: string;
  latitude: string;
  longitude:string;
  date:string;
}

type ImageMomentsLife ={
  id: number;
  name:string;
  link:string;
  shortDescription: string;
  description: string;
  cameraLink: string;
  softwareLink: string;
  latitude: string;
  longitude:string;
  date:string;
}

type ImageOutside ={
  id: number;
  name:string;
  link:string;
  shortDescription: string;
  description: string;
  cameraLink: string;
  softwareLink: string;
  latitude: string;
  longitude:string;
  date:string;
}

type ImagePortrait ={
  id: number;
  name:string;
  link:string;
  shortDescription: string;
  description: string;
  cameraLink: string;
  softwareLink: string;
  latitude: string;
  longitude:string;
  date:string;
}

type ImagePregnancy ={
  id: number;
  name:string;
  link:string;
  shortDescription: string;
  description: string;
  cameraLink: string;
  softwareLink: string;
  latitude: string;
  longitude:string;
  date:string;
}

type Data = {
  profile: Profile;
  categories: Categories[];
  imageArtistic: ImageArtistic[];
  imageBoudoirTexture: ImageBoudoirTexture[];
  imageBoudoir: ImageBoudoir[];
  imageMomentsLife: ImageMomentsLife[];
  imageOutside: ImageOutside[];
  imagePortrait: ImagePortrait[];
  imagePregnancy: ImagePregnancy[];
  error: Error | null;
};

const initialData: Data = {
  profile: {
    firstname: "",
    lastname: "",
    profession: "",
    profilePhoto: "",
    memoji:""
  },
  categories: [],
  imageArtistic: [],
  imageBoudoirTexture:[],
  imageBoudoir:[],
  imageMomentsLife:[],
  imageOutside:[],
  imagePortrait:[],
  imagePregnancy:[],
  error: null
};

const DataContext = createContext<Data | undefined>(undefined);

export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | undefined>(undefined);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData: Data = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataContext.Provider value={data || initialData}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};