var mycode = `#include <iostream>
#include <cmath>
using namespace std;
float calculateSD(float data[]);
int main()
{
    int i;
    float data[10];
    cout << "Enter 10 elements: ";
    for(i = 0; i < 10; ++i)
        cin >> data[i];
    cout << endl << "Standard Deviation = " << calculateSD(data);
    return 0;
}
float calculateSD(float data[])
{
    float sum = 0.0, mean, standardDeviation = 0.0;
    int i;
    for(i = 0; i < 10; ++i)
    {
        sum += data[i];
    }
    mean = sum/10;
    for(i = 0; i < 10; ++i)
        standardDeviation += pow(data[i] - mean, 2);
    return sqrt(standardDeviation / 10);
}
#include "bigint.h"
void BIG_INT::set_value(){
    cin>>value;
    if(value.size()>308){
        cout<<"Too big for BIG_INT"<<endl;
        return ;
    }
    for(int i = 0; i<309;i++){
        value_arr[i]=0;
    }
    int last_arr = 308;
    int size = value.size();
    int last = size-1;
    while(last>=0){
        value_arr[last_arr] = value[last]-'0';
        last_arr--;
        last--;
    }
}
void BIG_INT::display(){
    cout<<value<<endl;
}
BIG_INT BIG_INT:: operator + ( BIG_INT const &y){
    BIG_INT z;
    int carry=0;
    for(int i=308;i>0;i--){
        int temp = value_arr[i] + y.value_arr[i] + carry ;
        carry = temp/ 10;
        z.value_arr[i] = temp % 10; 

      //  cout<<z.value_arr[i]<<endl;
    }
    if(carry != 0){
        cout<<"Too big for BIG_INT"<<endl;
        return z;
    }
    int i = 1;
    while(z.value_arr[i]==0&&i<309){
        i++;
    }
    if(i==309)
        z.value.push_back('0');
    while(i<309){
        char temp = z.value_arr[i]+'0';
        z.value.push_back(temp);
        i++;
    }
    return z;    
}
BIG_INT BIG_INT:: operator - (BIG_INT const &y){
    BIG_INT z;
    int carry = 0;
    int temp_arr[309];
    for(int i=0;i<=308;i++){
        temp_arr[i] = value_arr[i];
       // cout<<temp_arr[i]<<endl;
    }
    for(int i=308;i>0;i--){
        int temp = temp_arr[i] - y.value_arr[i] ;
        if(temp < 0){
            int j = i-1;
            while(temp_arr[j]<=0&&j>0){

                temp_arr[j] = 9;
                j--;
            }
if(j==0){
                cout<<"Answer is negative, I am unable to find, Sorry"<<endl;
                return z;
            }
            temp_arr[j]--;
            temp = 10 + temp;
        }
        z.value_arr[i] = temp;
     //  cout<<z.value_arr[i]<<endl;
    }
    int i = 1;
    while(z.value_arr[i]==0&&i<309){
        i++;
    }
    if(i==309)
        z.value.push_back('0');
    while(i<309){
        char temp = z.value_arr[i]+'0';
        z.value.push_back(temp);
        i++;
    }
    return z;
}
BIG_INT BIG_INT::operator * (BIG_INT const &y){
    BIG_INT z;
    for(int j = 0;j< 309;j++){
            z.value_arr[j] = 0;
        }  
    int carry=0;
    for(int i=308 ; i>308-y.value.size() ; i--){
        BIG_INT temp ;
        for(int j = 308;j>=0 ; j--){
            
            temp.value_arr[j] = 0;
        }
        int k = 308-i;
        int j;
        for( j=308; j>(308-value.size()-5)&&(j-k)>0 ; j--){
            temp.value_arr[j-k] = y.value_arr[i] * value_arr[j] + carry;
            carry = temp.value_arr[j-k]/10;
            temp.value_arr[j-k] = temp.value_arr[j-k]%10;
        }
        if(carry>0||(j-k)<=0)
        {
            cout<<"Too big answer for BIG_INT , I am sorry"<<endl;
            return z;
        }
        z = temp + z;
        carry = 0;
    }
    return z;
}`;
var newcode = mycode.split("\n");
export default newcode;
