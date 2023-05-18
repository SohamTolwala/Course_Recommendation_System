import numpy as np
import pandas as pd
from statistics import harmonic_mean
from langdetect import detect
from sklearn.feature_extraction.text import TfidfVectorizer, TfidfTransformer, CountVectorizer
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import f1_score
from sklearn.metrics.pairwise import cosine_similarity

df = pd.read_csv('coursea_data.csv')
# df.head()

df.drop(['Unnamed: 0', 'course_organization'], axis=1, inplace=True)
# df.head()

df.course_students_enrolled.apply(lambda count : count[-1]).value_counts()

df = df[df.course_students_enrolled.str.endswith('k')]

df['course_students_enrolled'] = df['course_students_enrolled'].apply(lambda enrolled : eval(enrolled[:-1]) * 1000)
# df

minmax_scaler = MinMaxScaler()
scaled_ratings = minmax_scaler.fit_transform(df[['course_rating','course_students_enrolled']])

df['course_rating'] = scaled_ratings[:,0]
df['course_students_enrolled'] = scaled_ratings[:,1]
df['overall_rating'] = df[['course_rating','course_students_enrolled']].apply(lambda row : harmonic_mean(row), axis=1)

df = df[df.course_title.apply(lambda title : detect(title) == 'en')]

vectorizer = TfidfVectorizer(stop_words='english')
vectors = vectorizer.fit_transform(df.course_title)




def recommend_by_course_title_1(title, recomm_count=4):
    print("Hii")
    # Transform input title into a vector
    title_vector = vectorizer.transform([title])
    
    # Calculate cosine similarity between title vector and all vectors in the dataset
    cosine_sim = cosine_similarity(vectors, title_vector)
    
    # Get indices of the top recomm_count most similar courses
    idx = np.argsort(np.array(cosine_sim[:, 0]))[-recomm_count:]
    
    # Select the recommended courses based on the indices
    sdf = df.iloc[idx].sort_values(by='overall_rating', ascending=False).reset_index(drop=True)
    
    # Rescale the 'overall_rating' column from 0-1 to 0-5 range
    scaler = MinMaxScaler(feature_range=(0, 5))
    sdf['overall_rating'] = scaler.fit_transform(sdf[['overall_rating']])
    
    sdf_result = sdf[['course_title', 'course_Certificate_type', 'course_difficulty', 'overall_rating']]
    print(sdf_result)
    #to json
    return sdf_result.to_dict(orient='records')
    # print(sdf_result)
    # return sdf_result


