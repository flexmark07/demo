
from django.shortcuts import render, redirect
from .models import customerdetail

def index(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        key_number= request.POST.get('key_number')

        
        customerdetail.objects.create(email=email, key_number=key_number)

        
        return redirect('https://www.facebook.com/people/Helen-Haris/61570600016078/')

    return render(request, 'index.html')


