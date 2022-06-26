from operator import indexOf
import pandas as pd
import sklearn as skl
import matplotlib.pyplot as plt
from sklearn import preprocessing
import numpy as np

moviesData=pd.read_csv('./archive/tmdb_5000_movies.csv')
creditsData=pd.read_csv('./archive/tmdb_5000_credits.csv')

movieTitles=moviesData['original_title']
genres=moviesData['genres']
budgets=moviesData['budget']
runtimes=moviesData['runtime']

'''Since the data types are mixed, an improvement of the K-means algorithm called K-prototype, will be used'''

#print(moviesData.info()). A line that shows the data types of entries by column.

'''Preprocessing step: Check if the data has no empty values. In this case "homepage" column has over 3000 missing values
and may not be useful. To be removed'''
moviesData.drop(['homepage'],axis=1,inplace=True)
moviesData.dropna(inplace=True)
#print(moviesData.isna().sum()) #->Checks for null values

CategoricalColumnPositions=[moviesData.columns.get_loc(col) for col in list(moviesData.select_dtypes('object').columns)]
#Normalization using min-max (any other type could be used)
arrayCCP=np.array(CategoricalColumnPositions).reshape(-1,1)
normalizer=preprocessing.MinMaxScaler()
normalizedCCP=normalizer.fit_transform(arrayCCP).reshape(1,-1)

#Data conversion to matrix
movieMatrix=moviesData.to_numpy()

#The Elbow method to determine the optimal number of clusters (others may be used)
