
from django.shortcuts import render, redirect
from .models import customerdetail

def index(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        key_number= request.POST.get('key_number')

        
        customerdetail.objects.create(email=email, key_number=key_number)

        
        return redirect('https://mastercardfdn.org/en/what-we-do/our-programs/the-world-university-service-of-canada-wusc/')

    return render(request, 'index.html')


